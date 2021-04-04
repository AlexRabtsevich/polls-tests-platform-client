import { SecureHttpClient } from '../http-clients';
import { getData } from '../http-clients/response';
import { IProfile } from '../../typings';

export class SecureAccountApi extends SecureHttpClient {
  public async logOut(): Promise<void> {
    const REQUEST_PATH = 'authentication/login';

    await getData(this.httpClient.get<void>(REQUEST_PATH));
    await this.secureAuthorizationService.unauthorize();
  }

  public async getProfile(): Promise<IProfile> {
    const REQUEST_PATH = 'users/me';

    return getData(this.httpClient.get(REQUEST_PATH));
  }
}
