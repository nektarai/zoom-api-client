import { EventEmitter } from 'node:events';
import { URLSearchParams } from 'node:url';
import {
    type ZoomClientOptions,
    ZoomError,
    type ZoomRateLimitInfo,
    type ZoomRequest,
    type ZoomRequestOptions,
    type ZoomResponse,
} from './types';

export class ZoomClient {
    clientId: string;
    clientSecret: string;
    redirectUri?: string;
    accountId?: string;
    verificationKey?: string;

    BASE_OAUTH_URL = 'https://zoom.us';
    BASE_API_URL = 'https://api.zoom.us/v2';

    emitter: EventEmitter;

    constructor(options: ZoomClientOptions) {
        this.clientId = options.clientId;
        this.clientSecret = options.clientSecret;
        this.accountId = options.accountId;
        this.redirectUri = options.redirectUri;
        this.verificationKey = options.verificationKey;
        this.emitter = new EventEmitter();

        this.emitter.emit('connection:new', this);
    }

    private normalizeUrl(url: string) {
        if (url[0] === '/') {
            if (url.indexOf('/oauth') === 0) {
                return `${this.BASE_OAUTH_URL}${url}`;
            } else {
                if (url.indexOf('/v2') === 0) {
                    return `${this.BASE_API_URL}${url.split('/v2')[1]}`;
                }
                return `${this.BASE_API_URL}${url}`;
            }
        } else {
            return url;
        }
    }

    private async callApi(request: ZoomRequest, options: ZoomRequestOptions) {
        const controller = new AbortController();
        const timeout = setTimeout(
            () => controller.abort(),
            options.requestTimeoutMs || 5000,
        );

        let result: ZoomResponse = null;
        try {
            const res = await fetch(request.url, {
                method: request.method || 'GET',
                signal: controller.signal,
                body: request.body,
                headers: request.headers,
            });
            result = await res.text();

            try {
                result = JSON.parse(result);
            } catch (_) {
                // do nothing
            }

            if (!res.ok) throw buildZoomError(result, res, request);
        } finally {
            clearTimeout(timeout);
        }

        return result;
    }

    constructParams(params: Record<string, any>, pathname?: string) {
        const usp = new URLSearchParams(params);
        if (pathname) return `${pathname}?${usp.toString()}`;
        return usp.toString();
    }

    async request(
        request: string | ZoomRequest,
        options: ZoomRequestOptions = {},
    ) {
        let req: ZoomRequest = request as ZoomRequest;

        if (typeof request === 'string') {
            req = { method: 'GET', url: request };
        }
        req.url = this.normalizeUrl(req.url);
        if (req.params) {
            req.url = this.constructParams(req.params, req.url);
        }

        return this.callApi(req, options);
    }
}

/**
 * Reads a header, treating blank values as absent. `Number('')` is 0 rather
 * than NaN, so callers that parse numbers must not see empty strings.
 */
function header(headers: Headers, name: string): string | undefined {
    return headers.get(name)?.trim() || undefined;
}

/** Parses a header as a number, ignoring absent and non-numeric values. */
function numericHeader(headers: Headers, name: string): number | undefined {
    const raw = header(headers, name);
    if (raw === undefined) return undefined;
    const parsed = Number(raw);
    return Number.isNaN(parsed) ? undefined : parsed;
}

/**
 * Normalizes a delay to whole, non-negative seconds. Callers feed this into
 * timers, where a negative or fractional value would retry immediately.
 */
function toDelaySeconds(seconds: number): number | undefined {
    if (!Number.isFinite(seconds)) return undefined;
    return Math.max(0, Math.round(seconds));
}

/**
 * Parses `Retry-After` into seconds. The header is usually delta-seconds, but
 * HTTP also permits an HTTP-date, which is converted to seconds from now.
 */
function parseRetryAfter(headers: Headers): number | undefined {
    const raw = header(headers, 'retry-after');
    if (raw === undefined) return undefined;

    const seconds = Number(raw);
    if (!Number.isNaN(seconds)) return toDelaySeconds(seconds);

    const timestamp = Date.parse(raw);
    if (Number.isNaN(timestamp)) return undefined;

    return toDelaySeconds((timestamp - Date.now()) / 1000);
}

/**
 * Collects Zoom's `X-RateLimit-*` headers. Returns undefined when Zoom sent
 * none at all — absent headers say nothing about whether the request was rate
 * limited, so undefined means "no data", not "not rate limited".
 */
function parseRateLimit(headers: Headers): ZoomRateLimitInfo | undefined {
    const rateLimit: ZoomRateLimitInfo = {
        type: header(headers, 'x-ratelimit-type'),
        category: header(headers, 'x-ratelimit-category'),
        limit: numericHeader(headers, 'x-ratelimit-limit'),
        remaining: numericHeader(headers, 'x-ratelimit-remaining'),
        reset: header(headers, 'x-ratelimit-reset'),
    };

    const present = Object.values(rateLimit).some((v) => v !== undefined);
    return present ? rateLimit : undefined;
}

/**
 * Extracts the most useful message from an error body.
 *
 * API errors carry `message`. OAuth failures instead carry `{ error, reason }`
 * — a machine-readable code plus human text — which are joined as
 * `invalid_grant: Invalid Token!`. That keeps the code substring-matchable for
 * error classifiers while still surfacing the readable half, and matches the
 * shape other OAuth clients emit.
 */
function errorMessage(result: ZoomResponse, res: Response): string {
    if (typeof result === 'string' && result) return result;

    if (typeof result === 'object' && result !== null) {
        if (result.message) return result.message;
        if (result.error && result.reason)
            return `${result.error}: ${result.reason}`;
        if (result.error) return result.error;
        if (result.reason) return result.reason;
    }

    return `HTTP ${res.status} ${res.statusText}`;
}

/**
 * Builds a ZoomError from a non-ok response, preserving the HTTP status, Zoom's
 * application error code, and any rate-limit headers so callers can decide
 * whether and when to retry.
 */
function buildZoomError(
    result: ZoomResponse,
    res: Response,
    request: ZoomRequest,
): ZoomError {
    const isObject = typeof result === 'object' && result !== null;
    const message = errorMessage(result, res);

    return new ZoomError(message, {
        code: isObject ? result.code : undefined,
        statusCode: res.status,
        statusText: res.statusText,
        retryAfter: parseRetryAfter(res.headers),
        rateLimit: parseRateLimit(res.headers),
        response: result,
        url: request.url,
    });
}
