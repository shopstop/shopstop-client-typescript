const DEFAULT_HTTP_TIMEOUT = 1000;

export type Method =
    | 'get'
    | 'GET'
    | 'delete'
    | 'DELETE'
    | 'head'
    | 'HEAD'
    | 'options'
    | 'OPTIONS'
    | 'post'
    | 'POST'
    | 'put'
    | 'PUT'
    | 'patch'
    | 'PATCH'
    | 'link'
    | 'LINK'
    | 'unlink'
    | 'UNLINK';

export class HttpRequest {
    private readonly data: string | object | undefined;
    private readonly method: Method;
    private readonly url: string;
    private readonly timeout: number | undefined;

    public constructor(options: {
        data?: string | object;
        method: Method;
        timeout?: number;
        url: string;
    }) {
        this.data = options.data;
        this.method = options.method;
        this.timeout = options.timeout;
        this.url = options.url;
    }

    public getData(): string | object | undefined {
        return this.data;
    }

    public getMethod(): Method {
        return this.method;
    }

    public getTimeout(): number {
        if (typeof this.timeout === 'number') {
            return this.timeout;
        }

        return DEFAULT_HTTP_TIMEOUT;
    }

    public getUrl(): string {
        return this.url;
    }
}
