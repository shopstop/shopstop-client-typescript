import { AuthClient } from '../../src/client/Auth';
import { AuthModel } from '../../src/model/Auth';

describe('client.AuthClient', () => {
    test('it fetches auth by uuid from auth service', () => {
        const mockAuthService = {};
        mockAuthService.getAuth = function () {
            return new AuthModel({
                uuid: 'test-uuid',
                refreshToken: 'test-refresh-token',
                accessToken: 'test-access-token',
                created: '2020-01-01 00:11:22',
                expires: '2021-01-01 00:11:22',
            });
        };

        const authClient = new AuthClient({
            authService: mockAuthService,
        });
        const authModel = authClient.getAuth('test');

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
