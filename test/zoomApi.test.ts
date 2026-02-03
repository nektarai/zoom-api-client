import { ZoomApi, ZoomClient } from '../src';
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
    const resp = { token: 'zak_token_value' };
    const scope = nock(client.BASE_API_URL)
        .get(`/users/${userId}/token`)
        .query({ type: 'zak' })
        .reply(200, resp);
    expect(await zoomApi.getZAKToken(userId)).toEqual(resp);
    scope.done();
});

it('downloadTranscript', async () => {
    const transcriptUrl = 'https://zoom.us/recordings/transcript/dummy.vtt';
    const resp = 'WEBVTT\n\n00:00:00.000 --> 00:00:01.000\nHello world';
    const scope = nock('https://zoom.us')
        .get('/recordings/transcript/dummy.vtt')
        .reply(200, resp);
    expect(await zoomApi.downloadTranscript(transcriptUrl)).toEqual(resp);
    scope.done();
});
it('pastMeeting() getPastMeeting', async () => {
    const meetingUUID = 'randomUUID';
    const meetingId = 'randomId';
    const resp = { id: 1, event: 'dummy' };
    const scope = nock(client.BASE_API_URL)
        .get(`/past_meetings/${meetingId}`)
        .reply(200, resp);
    expect(
        await zoomApi.pastMeeting(meetingUUID).getPastMeeting(meetingId),
    ).toEqual(resp);
    scope.done();
});
it('pastMeeting() listParticipants', async () => {
    const meetingUUID = 'randomUUID';
    const meetingId = 'randomId';
    const resp = [
        { id: 1, name: 'dummy' },
        { id: 2, name: 'dummy2' },
    ];
    const scope = nock(client.BASE_API_URL)
        .get(`/past_meetings/${meetingId}/participants`)
        .reply(200, resp);
    expect(
        await zoomApi.pastMeeting(meetingUUID).listParticipants(meetingId),
    ).toEqual(resp);
    scope.done();
});

it('user().listMeetings', async () => {
    const userId = 'randomId';
    const params = {
        type: 'scheduled',
    };
    const resp = [
        { id: 1, name: 'dummy' },
        { id: 2, name: 'dummy2' },
    ];
    const paramsStr = new URLSearchParams(params as any).toString();
    const scope = nock(client.BASE_API_URL)
        .get(`/users/${userId}/meetings?${paramsStr}`)
        .reply(200, resp);
    expect(await zoomApi.user(userId).listMeetings(params as any)).toEqual(
        resp,
    );
    scope.done();
});

it('user().createMeeting', async () => {
    const body = {
        topic: 'dummy',
        type: 2,
    };
    const resp = { id: 2, name: 'dummy' };
    const scope = nock(client.BASE_API_URL)
        .post(`/users/me/meetings`, body)
        .reply(201, resp);
    expect(await zoomApi.user('me').createMeeting(body as any)).toEqual(resp);
    scope.done();
});
