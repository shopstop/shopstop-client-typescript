import { ApiClientConfig } from '../../src/ApiClientConfig';
import { AuthModel } from '../../src/model/Auth';
import { AuthService } from '../../src/service/Auth';
import { HttpResponse } from '../../src/http/HttpResponse';

describe('service.AuthService', () => {
    test('it fetches auth by uuid from http client', () => {
        const mockJsonResponse = `
        {
            "uuid": "test-uuid",
            "refresh_token": "test-refresh-token",
            "access_token": "test-access-token",
            "created": "2020-01-01 00:11:22",
            "expires": "2021-01-01 00:11:22"
        }
        `;

        const mockHttpClient = {};
        mockHttpClient.do = function () {
            return new HttpResponse({
                statusCode: 200,
                responseBody: mockJsonResponse,
            });
        };

        const authConfig = new ApiClientConfig({
            httpClient: mockHttpClient,
        });

        const authService = new AuthService(authConfig);
        const authModel = authService.getAuth('test');

        const expectedAuthModel = new AuthModel({
            uuid: 'test-uuid',
            refreshToken: 'test-refresh-token',
            accessToken: 'test-access-token',
            created: '2020-01-01 00:11:22',
            expires: '2021-01-01 00:11:22',
        });
        expect(authModel).toEqual(expectedAuthModel);
    });
});
