import { ApiClientConfig, ENV_BASE_API_URL, REGION_TEST, REGION_UK } from '../src/ApiClientConfig';

describe('ApiClientConfig', () => {
    test('it inits with UK as the default region', () => {
        const config = new ApiClientConfig();

        const region = config.getRegion();
        expect(region).toEqual(REGION_UK);
    });
    test('it inits with custom region', () => {
        const config = new ApiClientConfig({
            region: REGION_TEST,
        });

        const region = config.getRegion();
        expect(region).toEqual(REGION_TEST);
    });
    test('it allows custom base url', () => {
        const env = process.env;
        process.env[String(ENV_BASE_API_URL)] = '8.8.8.8';

        const config = new ApiClientConfig();
        const baseApiUrl = config.getBaseApiUrl();
        expect(baseApiUrl).toEqual('8.8.8.8');

        process.env = env;
    });
});
