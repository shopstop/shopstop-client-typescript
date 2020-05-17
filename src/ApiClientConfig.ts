import { HttpClient } from './http/HttpClient';
import { XhrHttpClient } from './http/Xhr';

export const BASE_API_URL_LOCAL = 'http://127.0.0.1';
export const BASE_API_URL_UK = 'https://api.shopstop.co.uk';
export const ENV_BASE_API_URL = 'SHOPSTOP_BASE_API_URL';
export const REGION_TEST = 'Testing';
export const REGION_UK = 'UK';

const baseApiUrlMap = new Map();
baseApiUrlMap.set(REGION_TEST, BASE_API_URL_LOCAL);
baseApiUrlMap.set(REGION_UK, BASE_API_URL_UK);

export class ApiClientConfig {
    private httpClient: HttpClient;
    private region: string;

    public constructor(options?: { httpClient?: HttpClient; region?: string }) {
        this.httpClient = new XhrHttpClient();
        this.region = REGION_UK;

        if (typeof options !== 'undefined') {
            this.setOptions(options);
        }
    }

    public setOptions(options: { httpClient?: HttpClient; region?: string }): void {
        if (typeof options.httpClient !== 'undefined') {
            this.httpClient = options.httpClient;
        }

        if (typeof options.region !== 'undefined') {
            this.setRegion(options.region);
        }
    }

    public getBaseApiUrl(): string {
        if (ENV_BASE_API_URL in process.env) {
            return process.env.ENV_BASE_API_URL;
        }

        const region = this.getRegion();
        if (baseApiUrlMap.has(region)) {
            return baseApiUrlMap.get(region);
        }

        throw new Error('region ' + region + ' is not supported');
    }

    public getHttpClient(): HttpClient {
        return this.httpClient;
    }

    public getRegion(): string {
        return this.region;
    }

    public setRegion(region: string): void {
        if (!baseApiUrlMap.has(region)) {
            throw new Error('region ' + region + ' is not supported');
        }

        this.region = region;
    }
}
