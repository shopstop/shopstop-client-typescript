import { ApiClientConfig } from '../ApiClientConfig';
import { AuthService } from '../service/Auth';

export abstract class AbstractClient {
    protected readonly config: ApiClientConfig;
    protected readonly authService: AuthService;

    public constructor(options?: { config?: ApiClientConfig; authService?: AuthService }) {
        let config = new ApiClientConfig();
        if (typeof options !== 'undefined' && typeof options.config !== 'undefined') {
            config = options.config;
        }

        let authService = new AuthService(config);
        if (typeof options !== 'undefined' && typeof options.authService !== 'undefined') {
            authService = options.authService;
        }

        this.config = config;
        this.authService = authService;
    }

    public getConfig(): ApiClientConfig {
        return this.config;
    }

    public getAuthService(): AuthService {
        return this.authService;
    }
}
