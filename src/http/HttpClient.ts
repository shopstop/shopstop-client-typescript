import { HttpResponse } from './HttpResponse';
import { HttpRequest } from './HttpRequest';

export interface HttpClient {
    do(req: HttpRequest): HttpResponse;
    doAsync(req: HttpRequest): Promise<HttpResponse>;
}
