import { ApiClientConfig, REGION_TEST, REGION_UK } from '../src/ApiClientConfig';

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
});
