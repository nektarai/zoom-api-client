import { ZoomApi, ZoomClient } from '../src';
import { ZoomApi$Reports$Meetings } from '../src';
import nock from 'nock';
import { URLSearchParams } from 'url';
const clientId = 'dummy';
const clientSecret = 'dummy';
const accountId = 'dummy';

let client: ZoomClient;
let zoomApi: ZoomApi;

beforeEach(() => {
    client = new ZoomClient({
        clientId,
        clientSecret,
        accountId,
    });
    zoomApi = new ZoomApi({ client, tokens: { access_token: 'dummy' } });
});

it('getZAKToken', async () => {
    const userId = 'randomId';
    const resp = { token: 'dummy' };
    const scope = nock(client.BASE_API_URL)
        .get(`/users/${userId}/token?type=zak`)
        .reply(200, resp);
    expect(await zoomApi.getZAKToken(userId)).toEqual(resp);
    scope.done();
});
it('me', async () => {
    const resp = { id: 1, name: 'dummy' };
    const scope = nock(client.BASE_API_URL).get('/users/me').reply(200, resp);
    expect(await zoomApi.me()).toEqual(resp);
    scope.done();
});
it('users() list', async () => {
    const resp = [
        { id: 1, name: 'dummy' },
        { id: 2, name: 'dummy2' },
    ];
    const scope = nock(client.BASE_API_URL)
        .get('/users?page_size=30&status=active')
        .reply(200, resp);
    expect(await zoomApi.users().list()).toEqual(resp);
    scope.done();
});
it('users() get one user', async () => {
    const userId = 'randomId';
    const resp = { id: 1, name: 'dummy' };
    const scope = nock(client.BASE_API_URL)
        .get(`/users/${userId}`)
        .reply(200, resp);
    expect(await zoomApi.users().get(userId)).toEqual(resp);
    scope.done();
});
it('pastMeeting() details', async () => {
    const meetingId = 'randomId';
    const resp = { id: 1, event: 'dummy' };
    const scope = nock(client.BASE_API_URL)
        .get(`/past_meetings/${meetingId}`)
        .reply(200, resp);
    expect(await zoomApi.pastMeeting(meetingId).details()).toEqual(resp);
    scope.done();
});
it('pastMeeting() get participants', async () => {
    const meetingId = 'randomId';
    const resp = [
        { id: 1, name: 'dummy' },
        { id: 2, name: 'dummy2' },
    ];
    const scope = nock(client.BASE_API_URL)
        .get(`/past_meetings/${meetingId}/participants?page_size=30`)
        .reply(200, resp);
    expect(await zoomApi.pastMeeting(meetingId).participants()).toEqual(resp);
    scope.done();
});

it('reports() meetings', async () => {
    const userId = 'randomId';
    const params: ZoomApi$Reports$Meetings = {
        from: 'dummy',
        to: 'dummy',
        page_size: 30,
        next_page_token: 'abc',
        page_count: 0,
        total_records: 0,
        meetings: [],
    };
    const resp = [
        { id: 1, name: 'dummy' },
        { id: 2, name: 'dummy2' },
    ];
    const paramsStr = new URLSearchParams({
        ...params,
        type: 'past',
    } as unknown as Record<string, string>).toString();
    const scope = nock(client.BASE_API_URL)
        .get(`/report/users/${userId}/meetings?${paramsStr}`)
        .reply(200, resp);
    expect(await zoomApi.reports().meetings(userId, params)).toEqual(resp);
    scope.done();
});

it('meetings() list', async () => {
    const userId = 'randomId';
    const params = {
        page_size: '30',
        type: 'scheduled',
        next_page_token: 'random',
        page_number: '30',
    };
    const resp = [
        { id: 1, name: 'dummy' },
        { id: 2, name: 'dummy2' },
    ];
    const paramsStr = new URLSearchParams(params).toString();
    const scope = nock(client.BASE_API_URL)
        .get(`/users/${userId}/meetings?${paramsStr}`)
        .reply(200, resp);
    expect(await zoomApi.meetings().list(userId, params as any)).toEqual(resp);
    scope.done();
});

it('meetings() list', async () => {
    const meetingId = 'randomId';
    const params = {
        occurrence_id: '1',
        show_previous_occurrences: true,
    };
    const resp = { id: 2, name: 'dummy' };
    const paramsStr = new URLSearchParams(params as any).toString();
    const scope = nock(client.BASE_API_URL)
        .get(`/meetings/${meetingId}?${paramsStr}`)
        .reply(200, resp);
    expect(await zoomApi.meetings().get(meetingId, params)).toEqual(resp);
    scope.done();
});

it('meetings() create', async () => {
    const body = {
        topic: 'dummy',
        type: 2,
    };
    const resp = { id: 2, name: 'dummy' };
    const scope = nock(client.BASE_API_URL)
        .post(`/users/me/meetings`, body)
        .reply(201, resp);
    expect(await zoomApi.meetings().create('me', body as any)).toEqual(resp);
    scope.done();
});

it('meetings() recordings', async () => {
    const meetingId = 'randomId';
    const params = {
        include_fields: 'dummy',
    };
    const resp = { id: 2, name: 'dummy' };
    const paramsStr = new URLSearchParams(params).toString();
    const scope = nock(client.BASE_API_URL)
        .get(`/meetings/${meetingId}/recordings?${paramsStr}`)
        .reply(200, resp);
    expect(await zoomApi.meetings().recordings(meetingId, params)).toEqual(
        resp,
    );
    scope.done();
});
it('meetings() update', async () => {
    const meetingId = 'randomId';
    const body = {
        topic: 'dummy',
        type: 2,
    };
    // const resp = 'Meeting updated';
    const scope = nock(client.BASE_API_URL)
        .patch(`/meetings/${meetingId}`)
        .reply(204);
    await zoomApi.meetings().update(meetingId, body);
    scope.done();
    expect(scope.isDone()).toBeTruthy();
});
