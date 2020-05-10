import { ApiClient } from '../src/ApiClient';
import { ApiClientConfig, REGION_TEST } from '../src/ApiClientConfig';

describe('ApiClient', () => {
    test('it inits with a default config', () => {
        const apiClient = new ApiClient();
        const apiConfig = apiClient.getConfig();

        const expectedApiConfig = new ApiClientConfig();
        expect(apiConfig).toEqual(expectedApiConfig);
    });
    test('it inits with a custom config', () => {
        const apiClientConfig = new ApiClientConfig({
            region: REGION_TEST,
        });
        const apiClient = new ApiClient({
            config: apiClientConfig,
        });

        const apiConfig = apiClient.getConfig();
        expect(apiConfig).toEqual(apiClientConfig);
    });
});
