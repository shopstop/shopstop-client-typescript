import { ApiClientConfig } from '../ApiClientConfig';

export abstract class AbstractService {
    protected readonly config: ApiClientConfig;

    public constructor(config?: ApiClientConfig) {
        this.config = new ApiClientConfig();
        if (typeof config !== 'undefined') {
            this.config = config;
        }
    }
}
