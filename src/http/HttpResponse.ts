export class HttpResponse {
    private readonly statusCode: number;
    private readonly responseBody: string;

    public constructor(options: { statusCode: number; responseBody: string }) {
        this.statusCode = options.statusCode;
        this.responseBody = options.responseBody;
    }

    public getStatusCode(): number {
        return this.statusCode;
    }

    public getResponseBody(): string {
        return this.responseBody;
    }
}
