import { AbstractClient } from './client/Abstract';
import { AuthClient } from './client/Auth';
import { applyMixins } from './util/mixins';

// @ts-ignore
export class ApiClient extends AbstractClient implements AuthClient {}
applyMixins(ApiClient, [AuthClient]);
