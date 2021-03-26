import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from './constants';

export class TokenSaveService {
  private saveTokenToLocalStorage(tokenKey: string, token: string): void {
    localStorage.setItem(tokenKey, token);
  }

  public saveAccessToken(accessToken: string): void {
    this.saveTokenToLocalStorage(ACCESS_TOKEN_KEY, accessToken);
  }

  public saveRefreshToken(refreshToken: string): void {
    this.saveTokenToLocalStorage(REFRESH_TOKEN_KEY, refreshToken);
  }
}
