import { TokenDeleteService } from './token-delete-service';
import { TokenReadService } from './token-read-service';
import { TokenSaveService } from './token-save-service';

export class TokenService {
  constructor(
    private readonly tokenDeleteService: TokenDeleteService = new TokenDeleteService(),
    private readonly tokenReadService: TokenReadService = new TokenReadService(),
    private readonly tokenSaveService: TokenSaveService = new TokenSaveService(),
  ) {}

  public getAccessToken(): string | null {
    return this.tokenReadService.getAccessToken();
  }

  public getRefreshToken(): string | null {
    return this.tokenReadService.getRefreshToken();
  }

  public saveAccessToken(accessToken: string): void {
    this.tokenSaveService.saveAccessToken(accessToken);
  }

  public saveRefreshToken(refreshToken: string): void {
    this.tokenSaveService.saveRefreshToken(refreshToken);
  }

  public removeAccessToken(): void {
    this.tokenDeleteService.deleteAccessToken();
  }

  public removeRefreshToken(): void {
    this.tokenDeleteService.deleteRefreshToken();
  }
}
