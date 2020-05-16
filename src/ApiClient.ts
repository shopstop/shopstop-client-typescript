import { AuthClient } from './client/Auth';

// [Hack] Mixins do not work when imported
class ApiAuthClient extends AuthClient {}

// @ts-ignore
export class ApiClient extends ApiAuthClient {}
