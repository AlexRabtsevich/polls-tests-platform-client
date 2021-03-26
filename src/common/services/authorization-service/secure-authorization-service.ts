import { IAuthorizationPayload } from '../../typings';
import { BaseAuthorizationService } from './base-authorization-service';

export class SecureAuthorizationService extends BaseAuthorizationService {
  constructor(private readonly refreshTokenCallback: (refreshToken: string) => Promise<IAuthorizationPayload>) {
    super();
  }

  public async getAccessToken(): Promise<string> {
    const accessToken = this.tokenService.getAccessToken();

    if (!accessToken) {
      throw Error();
    }

    if (!this.tokenDecodingService.isTokenExpired(accessToken)) {
      return accessToken;
    }

    return await this.refreshToken();
  }

  private async refreshToken(): Promise<string> {
    const refreshToken = this.tokenService.getRefreshToken();

    if (!refreshToken) {
      throw Error();
    }

    const authorizationPayload = await this.refreshTokenCallback(refreshToken);
    this.authorize(authorizationPayload);

    return authorizationPayload.accessToken;
  }
}
