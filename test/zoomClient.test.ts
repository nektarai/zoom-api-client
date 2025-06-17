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

test('error url with json message', async () => {
    const errorMessage = 'error cause';
    const resp = { message: errorMessage };
    const scope = nock(ZOOM_BASE_API_URL).get('/v2/d4').reply(400, resp);

    try {
        await client.request({ method: 'GET', url: '/d4' });
        fail('Expected error to be thrown');
    } catch (error) {
        expect(error).toBeInstanceOf(ZoomError);
        const zoomError = error as ZoomError;
        expect(zoomError.message).toBe(errorMessage);
        expect(zoomError.statusCode).toBe(400);
        expect(zoomError.statusText).toBe('Bad Request');
        expect(zoomError.response).toEqual(resp);
        expect(zoomError.url).toBe('https://api.zoom.us/v2/d4');
    }

    scope.done();
});

test('error url with text message', async () => {
    const errorMessage = 'error cause';
    const scope = nock(ZOOM_BASE_API_URL)
        .get('/v2/d5')
        .reply(400, errorMessage);

    try {
        await client.request({ method: 'GET', url: '/d5' });
        fail('Expected error to be thrown');
    } catch (error) {
        expect(error).toBeInstanceOf(ZoomError);
        const zoomError = error as ZoomError;
        expect(zoomError.message).toBe(errorMessage);
        expect(zoomError.statusCode).toBe(400);
        expect(zoomError.statusText).toBe('Bad Request');
        expect(zoomError.response).toBe(errorMessage);
        expect(zoomError.url).toBe('https://api.zoom.us/v2/d5');
    }

    scope.done();
});

test('error with no message defaults to HTTP status', async () => {
    const resp = { some: 'data' };
    const scope = nock(ZOOM_BASE_API_URL).get('/v2/d6').reply(404, resp);

    try {
        await client.request({ method: 'GET', url: '/d6' });
        fail('Expected error to be thrown');
    } catch (error) {
        expect(error).toBeInstanceOf(ZoomError);
        const zoomError = error as ZoomError;
        expect(zoomError.message).toBe('HTTP 404 Not Found');
        expect(zoomError.statusCode).toBe(404);
        expect(zoomError.statusText).toBe('Not Found');
        expect(zoomError.response).toEqual(resp);
    }

    scope.done();
});

test('error with error field in response', async () => {
    const errorMessage = 'Invalid credentials';
    const resp = { error: errorMessage, code: 'AUTH_FAILED' };
    const scope = nock(ZOOM_BASE_API_URL).get('/v2/d7').reply(401, resp);

    try {
        await client.request({ method: 'GET', url: '/d7' });
        fail('Expected error to be thrown');
    } catch (error) {
        expect(error).toBeInstanceOf(ZoomError);
        const zoomError = error as ZoomError;
        expect(zoomError.message).toBe(errorMessage);
        expect(zoomError.statusCode).toBe(401);
        expect(zoomError.statusText).toBe('Unauthorized');
        expect(zoomError.response).toEqual(resp);
    }

    scope.done();
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
