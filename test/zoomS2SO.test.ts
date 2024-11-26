import { ZoomS2SO, ZoomClient } from '../src';
import nock from 'nock';

const clientId = 'dummy';
const clientSecret = 'dummy';
const accountId = 'dummy';

const tokens = {
    access_token: 'dummy',
    token_type: 'bearer',
    expires_in: 3599,
    scope: 'user:read:admin',
};

let client: ZoomClient;
let s2so: ZoomS2SO;

beforeEach(() => {
    client = new ZoomClient({
        clientId,
        clientSecret,
        accountId,
    });
    s2so = new ZoomS2SO(client);
});

test('authorizationUrl', () => {
    const state = { hello: 'world' };
    const stateStr = JSON.stringify(state);
    expect(() => s2so.getAuthorizationUrl(stateStr)).toThrowError();
});

test('requestTokens', async () => {
    const reqheaders = {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(
            `${clientId}:${clientSecret}`,
        ).toString('base64')}`,
    };
    const scope = nock(client.BASE_OAUTH_URL, { reqheaders })
        .persist()
        .post(
            `/oauth/token?grant_type=account_credentials&account_id=${accountId}`,
        )
        .reply(200, tokens);
    const resp = await s2so.requestTokens();
    expect(resp).toEqual(tokens);
    scope.done();
});

test('requestTokens fails', async () => {
    const reqheaders = {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Whatever`,
    };

    const scope = nock(client.BASE_OAUTH_URL, { reqheaders })
        .persist()
        .post(
            `/oauth/token?grant_type=account_credentials&account_id=${accountId}`,
        )
        .reply(200, tokens);
    try {
        await s2so.requestTokens();
    } catch (_) {
        //
    }
    expect(scope.isDone()).toEqual(false);
});

test('refreshTokens', async () => {
    const refreshToken = 'dummy';
    expect(() => s2so.refreshTokens(refreshToken)).toThrowError();
});

test('revokeTokens', async () => {
    const accessToken = 'dummy';
    expect(() => s2so.revokeTokens(accessToken)).toThrowError();
});
