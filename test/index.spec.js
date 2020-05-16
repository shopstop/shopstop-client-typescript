import { ShopStopApiClient, ShopStopApiClientConfig, SHOPSTOP_REGION_UK } from '../src';

describe('index.ts', () => {
    test('it exports ShopStopApiClient', () => {
        const apiClient = new ShopStopApiClient();
        expect(apiClient).toBeInstanceOf(ShopStopApiClient);
    });
    test('it exports ShopStopApiClientConfig', () => {
        const apiClientConfig = new ShopStopApiClientConfig();
        expect(apiClientConfig).toBeInstanceOf(ShopStopApiClientConfig);
    });
    test('it exports various regions', () => {
        expect(SHOPSTOP_REGION_UK).toEqual('UK');
    });
});
