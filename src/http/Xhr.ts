import { HttpClient } from './HttpClient';
import { HttpRequest } from './HttpRequest';
import { HttpResponse } from './HttpResponse';

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

export class XhrHttpClient implements HttpClient {
    public do(req: HttpRequest): HttpResponse {
        const xhr = new XMLHttpRequest();
        xhr.open(req.getMethod(), req.getUrl(), false);
        xhr.timeout = req.getTimeout();

        const requestData = XhrHttpClient.getXhrRequestData(req.getData());
        xhr.send(requestData);

        return new HttpResponse({
            statusCode: xhr.status,
            responseBody: xhr.responseText,
        });
    }

    public doAsync(req: HttpRequest): Promise<HttpResponse> {
        return new Promise((success) => {
            const xhr = new XMLHttpRequest();
            xhr.open(req.getMethod(), req.getUrl(), true);
            xhr.timeout = req.getTimeout();
            xhr.onload = function () {
                success(
                    new HttpResponse({
                        statusCode: xhr.status,
                        responseBody: xhr.responseText,
                    })
                );
            };
            xhr.onerror = function () {
                throw new Error(xhr.statusText);
            };

            const requestData = XhrHttpClient.getXhrRequestData(req.getData());
            xhr.send(requestData);
        });
    }

    private static getXhrRequestData(
        data: string | object | undefined
    ): string | FormData | undefined {
        if (typeof data === 'string' || typeof data === 'undefined') {
            return data;
        }

        const formData = new FormData();
        for (const key in data) {
            if (!Object.prototype.hasOwnProperty.call(data, key)) {
                continue;
            }

            // @ts-ignore
            const value = data[`${key}`];
            if (typeof value === 'string' || value instanceof Blob) {
                formData.append(key, value);
                continue;
            }

            throw new Error('unsupported xhr data value type: ' + typeof value);
        }

        return formData;
    }
}
