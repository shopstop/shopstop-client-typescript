import { AuthModel } from '../../src/model/Auth';

describe('model.AuthModel', () => {
    test('it initialises all properties to empty via constructor', () => {
        const auth = new AuthModel();

        const uuid = auth.getUuid();
        expect(uuid).toEqual('');

        const refreshToken = auth.getRefreshToken();
        expect(refreshToken).toEqual('');

        const accessToken = auth.getAccessToken();
        expect(accessToken).toEqual('');

        const created = auth.getCreated();
        expect(created).toEqual('');

        const expires = auth.getExpires();
        expect(expires).toEqual('');
    });
    test('it initialises properties to custom values via constructor', () => {
        const auth = new AuthModel({
            uuid: 'test-uuid',
            refreshToken: 'test-refresh-token',
            accessToken: 'test-access-token',
            created: 'test-created',
            expires: 'test-expires',
        });

        const uuid = auth.getUuid();
        expect(uuid).toEqual('test-uuid');

        const refreshToken = auth.getRefreshToken();
        expect(refreshToken).toEqual('test-refresh-token');

        const accessToken = auth.getAccessToken();
        expect(accessToken).toEqual('test-access-token');

        const created = auth.getCreated();
        expect(created).toEqual('test-created');

        const expires = auth.getExpires();
        expect(expires).toEqual('test-expires');
    });
});
