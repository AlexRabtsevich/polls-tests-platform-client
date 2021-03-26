import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from './constants';

export class TokenDeleteService {
  private deleteTokenFromLocalStorage(tokenKey: string): void {
    localStorage.removeItem(tokenKey);
  }

  public deleteAccessToken(): void {
    this.deleteTokenFromLocalStorage(ACCESS_TOKEN_KEY);
  }

  public deleteRefreshToken(): void {
    this.deleteTokenFromLocalStorage(REFRESH_TOKEN_KEY);
  }
}
