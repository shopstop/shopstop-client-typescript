import { AuthModel } from '../model/Auth';
import { HttpRequest } from '../http/HttpRequest';
import { AbstractService } from './Abstract';

const getAuthApiUrl = '{{base_api_url}}/auth/{{uuid}}';

export class AuthService extends AbstractService {
    public getAuth(uuid: string): AuthModel | undefined {
        const apiUrl = getAuthApiUrl
            .replace('{{base_api_url}}', this.config.getBaseApiUrl())
            .replace('{{uuid}}', uuid);
        const httpRequest = new HttpRequest({
            method: 'GET',
            url: apiUrl,
        });

        const httpClient = this.config.getHttpClient();
        const httpResponse = httpClient.do(httpRequest);
        if (httpResponse.getStatusCode() !== 200) {
            return undefined;
        }

        const responseObj = JSON.parse(httpResponse.getResponseBody());
        if (!Object.prototype.hasOwnProperty.call(responseObj, 'uuid')) {
            return undefined;
        }

        return new AuthModel({
            uuid: responseObj.uuid,
            refreshToken: responseObj.refresh_token,
            accessToken: responseObj.access_token,
            created: responseObj.created,
            expires: responseObj.expires,
        });
    }
}
