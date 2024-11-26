import { ZoomClient } from './zoomClient';
import { ZoomOauth } from './zoomOauth2';

export class ZoomS2SO extends ZoomOauth {
    constructor(client: ZoomClient) {
        super(client);
    }

    /* From: https://marketplace.zoom.us/docs/guides/auth/oauth#step-2-request-access-token */
    async requestTokens(): ReturnType<ZoomOauth['requestTokens']> {
        return this.client.request({
            params: {
                grant_type: 'account_credentials',
                account_id: this.client.accountId,
            },
            ...this.withOAuthTokenRequest('token'),
        }) as any;
    }

    getAuthorizationUrl(
        _?: string,
    ): ReturnType<ZoomOauth['getAuthorizationUrl']> {
        throw new Error('Operation not allowed in S2SO');
    }

    /* From: https://marketplace.zoom.us/docs/guides/auth/oauth/#refreshing-an-access-token */
    refreshTokens(_?: string): ReturnType<ZoomOauth['refreshTokens']> {
        throw new Error('Operation not allowed in S2SO');
    }

    /* From: https://marketplace.zoom.us/docs/guides/auth/oauth/#revoking-an-access-token */
    revokeTokens(_?: string): ReturnType<ZoomOauth['revokeTokens']> {
        throw new Error('Operation not allowed in S2SO');
    }
}
