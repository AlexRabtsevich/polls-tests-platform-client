import { BaseHttpClient } from '../http-clients/base-http-client';
import { IAuthorizationPayload } from '../../typings';
import { getData } from '../http-clients/response';

export class RefreshTokenApi extends BaseHttpClient {
  constructor() {
    super();
  }

  public refreshTokenRequest(refreshToken: string): Promise<IAuthorizationPayload> {
    const REQUEST_PATH = 'authentication/refresh';
    const responsePromise = this.httpClient.post(REQUEST_PATH, { refreshToken });

    return getData(responsePromise);
  }
}
