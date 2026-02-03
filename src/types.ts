export class ZoomError extends Error {
    constructor(msg) {
        super(msg);

        this.name = this.constructor.name;

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
