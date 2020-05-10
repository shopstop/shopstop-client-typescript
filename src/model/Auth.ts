export class AuthModel {
    private uuid: string = '';
    private refreshToken: string = '';
    private accessToken: string = '';
    private created: string = '';
    private expires: string = '';

    public constructor(options?: {
        uuid?: string;
        refreshToken?: string;
        accessToken?: string;
        created?: string;
        expires?: string;
    }) {
        if (typeof options !== 'undefined') {
            this.setOptions(options);
        }
    }

    public setOptions(options: {
        uuid?: string;
        refreshToken?: string;
        accessToken?: string;
        created?: string;
        expires?: string;
    }): void {
        if (typeof options.uuid !== 'undefined') {
            this.uuid = options.uuid;
        }

        if (typeof options.refreshToken !== 'undefined') {
            this.refreshToken = options.refreshToken;
        }

        if (typeof options.accessToken !== 'undefined') {
            this.accessToken = options.accessToken;
        }

        if (typeof options.created !== 'undefined') {
            this.created = options.created;
        }

        if (typeof options.expires !== 'undefined') {
            this.expires = options.expires;
        }
    }

    public getUuid(): string {
        return this.uuid;
    }

    public getRefreshToken(): string {
        return this.refreshToken;
    }

    public getAccessToken(): string {
        return this.accessToken;
    }

    public getCreated(): string {
        return this.created;
    }

    public getExpires(): string {
        return this.expires;
    }
}
