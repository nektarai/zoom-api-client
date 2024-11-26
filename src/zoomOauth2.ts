import {
    ZoomError,
    ZoomEventRequest,
    ZoomRequest,
    ZoomSuccess,
    ZoomTokensResponse,
} from './types';
import { ZoomClient } from './zoomClient';

export class ZoomOauth {
    protected client: ZoomClient;

    constructor(client: ZoomClient) {
        this.client = client;
    }

    /* From: https://marketplace.zoom.us/docs/guides/auth/oauth#step-1-request-user-authorization */
    getAuthorizationUrl(state?: string) {
        return this.client.constructParams(
            {
                response_type: 'code',
                redirect_uri: this.client.redirectUri,
                client_id: this.client.clientId,
                state,
            },
            `${this.client.BASE_OAUTH_URL}/oauth/authorize`,
        );
    }

    private withAuthorizationHeaders() {
        return {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${Buffer.from(
                `${this.client.clientId}:${this.client.clientSecret}`,
            ).toString('base64')}`,
        };
    }

    protected withOAuthTokenRequest(endpoint: string): ZoomRequest {
        return {
            url: `${this.client.BASE_OAUTH_URL}/oauth/${endpoint}`,
            method: 'POST',
            headers: this.withAuthorizationHeaders(),
        };
    }

    /* From: https://marketplace.zoom.us/docs/guides/auth/oauth#step-2-request-access-token */
    async requestTokens(code: string): Promise<ZoomTokensResponse> {
        const body = this.client.constructParams({
            grant_type: 'authorization_code',
            redirect_uri: this.client.redirectUri,
            code,
        });
        return this.client.request({
            body,
            ...this.withOAuthTokenRequest('token'),
        }) as any;
    }

    /* From: https://marketplace.zoom.us/docs/guides/auth/oauth/#refreshing-an-access-token */
    refreshTokens(refreshToken: string): Promise<ZoomTokensResponse> {
        const body = this.client.constructParams({
            grant_type: 'refresh_token',
            refresh_token: refreshToken,
        });
        return this.client.request({
            body,
            ...this.withOAuthTokenRequest('token'),
        }) as any;
    }

    /* From: https://marketplace.zoom.us/docs/guides/auth/oauth/#revoking-an-access-token */
    revokeTokens(accessToken: string): Promise<ZoomSuccess> {
        const body = this.client.constructParams({
            token: accessToken,
        });
        return this.client.request({
            body,
            ...this.withOAuthTokenRequest('revoke'),
        }) as any;
    }

    verifyEvent(event: ZoomEventRequest): boolean {
        if (!this.client.verificationKey)
            throw new ZoomError('No verification key provided');
        const { body, headers } = event;
        const { payload } = body;
        return (
            headers.authorization === this.client.verificationKey &&
            payload.client_id === this.client.clientId
        );
    }
}
