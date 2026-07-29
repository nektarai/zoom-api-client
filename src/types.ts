/** Rate-limit state parsed from Zoom's `X-RateLimit-*` response headers. */
export type ZoomRateLimitInfo = {
    /** `X-RateLimit-Type` — e.g. `QPS`, `Daily-limit`. */
    type?: string;
    /** `X-RateLimit-Category` — e.g. `Light`, `Medium`, `Heavy`. */
    category?: string;
    /** `X-RateLimit-Limit` */
    limit?: number;
    /** `X-RateLimit-Remaining` */
    remaining?: number;
    /** `X-RateLimit-Reset` — raw header value. Zoom sends a timestamp, not a duration. */
    reset?: string;
};

export type ZoomErrorOptions = {
    /** Zoom's application error code from the response body, e.g. `124`, `1001`. */
    code?: number | string;
    /** HTTP status code, e.g. `401`, `429`. */
    statusCode?: number;
    statusText?: string;
    /** `Retry-After` in seconds. */
    retryAfter?: number;
    rateLimit?: ZoomRateLimitInfo;
    /** Parsed response body. */
    response?: ZoomResponse;
    /** Fully-qualified request URL. */
    url?: string;
};

export class ZoomError extends Error {
    readonly code?: number | string;
    readonly statusCode?: number;
    readonly statusText?: string;
    readonly retryAfter?: number;
    readonly rateLimit?: ZoomRateLimitInfo;
    readonly response?: ZoomResponse;
    readonly url?: string;

    constructor(msg: string, options?: ZoomErrorOptions) {
        super(msg);

        this.name = this.constructor.name;

        this.code = options?.code;
        this.statusCode = options?.statusCode;
        this.statusText = options?.statusText;
        this.retryAfter = options?.retryAfter;
        this.rateLimit = options?.rateLimit;
        this.response = options?.response;
        this.url = options?.url;

        Error.captureStackTrace(this, this.constructor);
    }
}

export type ZoomClientOptions = {
    clientId: string;
    clientSecret: string;
    accountId?: string;
    redirectUri?: string;
    verificationKey?: string;
};

export type ZoomRequest = {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    url: string;
    params?: Record<string, any>;
    body?: RequestInit['body'];
    headers?: Record<string, string>;
};
export type ZoomRequestOptions = {
    /**
     * Default: 5000
     */
    requestTimeoutMs?: number;
} & Record<string, any>;

export type ZoomResponse = Record<string, any> | string | null;

export type ZoomSuccess = { success: boolean };

export type ZoomTokensResponse$Success = {
    access_token: string;
    token_type: 'bearer';
    refresh_token?: string;
    expires_in: number;
    scope: string;
};
export type ZoomTokensResponse$Failure = { error: string; reason: string };
export type ZoomTokensResponse =
    | ZoomTokensResponse$Success
    | ZoomTokensResponse$Failure;

export type ZoomTokens = Partial<ZoomTokensResponse$Success> &
    Required<
        Pick<ZoomTokensResponse$Success, 'access_token' | 'refresh_token'>
    >;

export type ZoomEventBody<T> = {
    event: string;
    payload: T & {
        client_id: string;
        signature: string;
    };
};

export type ZoomEventRequest<T = Record<string, string>> = {
    body: ZoomEventBody<T>;
    headers: Record<string, string>;
};
