import { AuthModel } from '../model/Auth';
import { AbstractClient } from './Abstract';

export class AuthClient extends AbstractClient {
    public getAuth(uuid: string): AuthModel | undefined {
        const authService = this.getAuthService();
        return authService.getAuth(uuid);
    }
}
