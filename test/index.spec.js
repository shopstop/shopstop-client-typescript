import { ApiClient, ApiClientConfig, REGION_UK } from '../src';

describe('index.ts', () => {
    test('it exports src/ApiClient', () => {
        const apiClient = new ApiClient();
        expect(apiClient).toBeInstanceOf(ApiClient);
    });
    test('it exports ApiClientConfig', () => {
        const apiClientConfig = new ApiClientConfig();
        expect(apiClientConfig).toBeInstanceOf(ApiClientConfig);
    });
    test('it exports various regions', () => {
        const region = REGION_UK;
        expect(region).toEqual('UK');
    });
});
