import { TokenDecodingService } from '../token-services';
import { TokenService } from '../token-services';
import { IAuthorizationPayload } from '../../typings';

export class BaseAuthorizationService {
  constructor(
    protected readonly tokenDecodingService: TokenDecodingService = new TokenDecodingService(),
    protected readonly tokenService: TokenService = new TokenService(),
  ) {}

  public authorize(authorizationPayload: IAuthorizationPayload): void {
    const { accessToken, refreshToken } = authorizationPayload;
    this.tokenService.saveAccessToken(accessToken);
    this.tokenService.saveRefreshToken(refreshToken);
  }

  public unauthorize(): void {
    this.tokenService.removeAccessToken();
    this.tokenService.removeRefreshToken();
  }

  public isAuthorized(): boolean {
    return !!this.tokenService.getAccessToken();
  }
}
