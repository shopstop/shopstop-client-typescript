import { HttpRequest } from '../../src/http/HttpRequest';

describe('http.HttpRequest', () => {
    test('it inits with just method and url', () => {
        const req = new HttpRequest({
            url: 'test',
            method: 'GET',
        });

        expect(req.getMethod()).toEqual('GET');
        expect(req.getUrl()).toEqual('test');
        expect(req.getTimeout()).toEqual(1000);
        expect(req.getData()).toEqual(undefined);
    });
});
