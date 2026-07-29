import { ZoomClient, ZoomError } from '../src';
import nock from 'nock';

const clientId = 'dummy';
const clientSecret = 'dummy';
const redirectUri = 'dummy';

let client: ZoomClient;

beforeEach(() => {
    client = new ZoomClient({
        clientId,
        clientSecret,
        redirectUri,
    });
});

test.skip('should initialise ZoomClient correctly', async () => {
    const emit = jest.fn();
    jest.mock('events', () => ({
        EventEmitter: jest.fn().mockImplementation(() => ({
            emit,
        })),
    }));
    const { EventEmitter } = await import('events');
    const { ZoomClient } = await import('../src');
    (EventEmitter as any).mockImplementation(() => ({
        emit,
    }));
    const client = new ZoomClient({
        clientId,
        clientSecret,
        redirectUri,
    });
    expect(EventEmitter).toHaveBeenCalled();
    expect(emit).toHaveBeenCalledWith('connection:new', client);
});

test('constructParams', async () => {
    expect(
        client.constructParams(
            {
                test1: 'dummy1',
                test2: 'dummy2',
            },
            'http://dummysite.com',
        ),
    ).toBe('http://dummysite.com?test1=dummy1&test2=dummy2');
});

test('request', async () => {
    const resp = { hello: 'world' };
    const url = 'http://dum.my/';
    const scope = nock(url).get('/').reply(200, resp);
    const data = await client.request({
        method: 'GET',
        url,
    });
    expect(data).toEqual(resp);
    scope.done();
});

test('convert to get request from string url', async () => {
    const resp = { hello: 'world' };
    const url = 'http://dum.my/';
    const scope = nock(url).get('/').reply(200, resp);
    const data = await client.request(url);
    expect(data).toEqual(resp);
    scope.done();
});

test('/oauth url', async () => {
    const resp = { hello: 'world' };
    const scope = nock(client.BASE_OAUTH_URL).get('/oauth').reply(200, resp);
    const data = await client.request('/oauth');
    expect(data).toEqual(resp);
    scope.done();
});

const ZOOM_BASE_API_URL = 'https://api.zoom.us';
test('/v2 url', async () => {
    const resp = { hello: 'world' };
    const scope = nock(ZOOM_BASE_API_URL).get('/v2').reply(200, resp);
    const data = await client.request('/v2');
    expect(data).toEqual(resp);
    scope.done();
});

test('/c3 url', async () => {
    const resp = { hello: 'world' };
    const scope = nock(ZOOM_BASE_API_URL).get('/v2/c3').reply(200, resp);
    const data = await client.request({ method: 'GET', url: '/c3' });
    expect(data).toEqual(resp);
    scope.done();
});

/** Asserts `request` rejects with a ZoomError and returns it for inspection. */
async function expectZoomError(url: string): Promise<ZoomError> {
    try {
        await client.request({ method: 'GET', url });
    } catch (err) {
        expect(err).toBeInstanceOf(ZoomError);
        return err as ZoomError;
    }
    throw new Error(`expected ${url} to reject`);
}

test('error url with json message', async () => {
    const errorMessage = 'error cause';
    const resp = { message: errorMessage };
    const scope = nock(ZOOM_BASE_API_URL).get('/v2/d4').reply(400, resp);

    const err = await expectZoomError('/d4');
    expect(err.message).toBe(errorMessage);
    expect(err.statusCode).toBe(400);
    expect(err.statusText).toBe('Bad Request');
    expect(err.response).toEqual(resp);
    expect(err.url).toBe(`${ZOOM_BASE_API_URL}/v2/d4`);
    expect(err.rateLimit).toBeUndefined();
    expect(err.retryAfter).toBeUndefined();

    scope.done();
});

test('error url with text message', async () => {
    const errorMessage = 'error cause';
    const scope = nock(ZOOM_BASE_API_URL)
        .get('/v2/d5')
        .reply(400, errorMessage);

    const err = await expectZoomError('/d5');
    expect(err.message).toBe(errorMessage);
    expect(err.statusCode).toBe(400);
    expect(err.response).toBe(errorMessage);
    expect(err.code).toBeUndefined();

    scope.done();
});

test('error with no message falls back to HTTP status', async () => {
    const scope = nock(ZOOM_BASE_API_URL)
        .get('/v2/d6')
        .reply(404, { some: 'data' });

    const err = await expectZoomError('/d6');
    expect(err.message).toBe('HTTP 404 Not Found');
    expect(err.statusCode).toBe(404);

    scope.done();
});

test('error uses `error` field when `message` is absent', async () => {
    const resp = { error: 'Invalid credentials' };
    const scope = nock(ZOOM_BASE_API_URL).get('/v2/d7').reply(401, resp);

    const err = await expectZoomError('/d7');
    expect(err.message).toBe('Invalid credentials');
    expect(err.statusCode).toBe(401);

    scope.done();
});

test('body `code` and HTTP `statusCode` are kept separate', async () => {
    const resp = { code: 124, message: 'Invalid access token' };
    const scope = nock(ZOOM_BASE_API_URL).get('/v2/d8').reply(401, resp);

    const err = await expectZoomError('/d8');
    expect(err.code).toBe(124);
    expect(err.statusCode).toBe(401);

    scope.done();
});

test('429 captures Retry-After and rate limit headers', async () => {
    const scope = nock(ZOOM_BASE_API_URL).get('/v2/d9').reply(
        429,
        { code: 429, message: 'Too many requests' },
        {
            'Retry-After': '60',
            'X-RateLimit-Type': 'QPS',
            'X-RateLimit-Category': 'Heavy',
            'X-RateLimit-Limit': '20',
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': '2026-07-30T00:00:00Z',
        },
    );

    const err = await expectZoomError('/d9');
    expect(err.statusCode).toBe(429);
    expect(err.code).toBe(429);
    expect(err.retryAfter).toBe(60);
    expect(err.rateLimit).toEqual({
        type: 'QPS',
        category: 'Heavy',
        limit: 20,
        remaining: 0,
        reset: '2026-07-30T00:00:00Z',
    });

    scope.done();
});

test('daily rate limit is distinguishable from per-second', async () => {
    const errorMessage =
        'You have reached the maximum daily rate limit for this API. Refer to the response header for details on when you can make another request.';
    const scope = nock(ZOOM_BASE_API_URL).get('/v2/d10').reply(
        429,
        { code: 429, message: errorMessage },
        {
            'X-RateLimit-Type': 'Daily-limit',
            'X-RateLimit-Category': 'Heavy',
        },
    );

    const err = await expectZoomError('/d10');
    expect(err.statusCode).toBe(429);
    expect(err.message).toBe(errorMessage);
    expect(err.rateLimit?.type).toBe('Daily-limit');
    expect(err.rateLimit?.limit).toBeUndefined();

    scope.done();
});

test('Retry-After in HTTP-date form converts to seconds', async () => {
    const retryAt = new Date(Date.now() + 120_000).toUTCString();
    const scope = nock(ZOOM_BASE_API_URL)
        .get('/v2/d11')
        .reply(429, { message: 'slow down' }, { 'Retry-After': retryAt });

    const err = await expectZoomError('/d11');
    expect(err.retryAfter).toBeGreaterThan(115);
    expect(err.retryAfter).toBeLessThanOrEqual(120);

    scope.done();
});

test('non-numeric rate limit headers are dropped', async () => {
    const scope = nock(ZOOM_BASE_API_URL)
        .get('/v2/d12')
        .reply(
            429,
            { message: 'slow down' },
            { 'X-RateLimit-Limit': 'unknown', 'X-RateLimit-Type': 'QPS' },
        );

    const err = await expectZoomError('/d12');
    expect(err.rateLimit).toEqual({ type: 'QPS' });

    scope.done();
});

test('blank rate limit headers are treated as absent, not zero', async () => {
    const scope = nock(ZOOM_BASE_API_URL).get('/v2/d14').reply(
        429,
        { message: 'slow down' },
        {
            'Retry-After': '',
            'X-RateLimit-Remaining': '  ',
            'X-RateLimit-Type': 'QPS',
        },
    );

    const err = await expectZoomError('/d14');
    expect(err.retryAfter).toBeUndefined();
    expect(err.rateLimit).toEqual({ type: 'QPS' });

    scope.done();
});

test('html error body surfaces as the raw message', async () => {
    const html = '<html><body>502 Bad Gateway</body></html>';
    const scope = nock(ZOOM_BASE_API_URL).get('/v2/d13').reply(502, html);

    const err = await expectZoomError('/d13');
    expect(err.message).toBe(html);
    expect(err.statusCode).toBe(502);
    expect(err.response).toBe(html);

    scope.done();
});

test('ZoomError is constructible with only a message', () => {
    const err = new ZoomError('boom');
    expect(err).toBeInstanceOf(Error);
    expect(err.name).toBe('ZoomError');
    expect(err.message).toBe('boom');
    expect(err.statusCode).toBeUndefined();
    expect(err.rateLimit).toBeUndefined();
});

test('url with param', async () => {
    const resp = { hello: 'world' };
    const scope = nock(ZOOM_BASE_API_URL)
        .get('/v2/c3?hello=world')
        .reply(200, resp);
    const data = await client.request({
        method: 'GET',
        url: '/c3',
        params: { hello: 'world' },
    });
    expect(data).toEqual(resp);
    scope.done();
});
