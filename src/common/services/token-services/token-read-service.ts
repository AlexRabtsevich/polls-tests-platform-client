import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from './constants';

export class TokenReadService {
  private getTokenFromLocalStorage(tokenKey: string): string | null {
    return localStorage.getItem(tokenKey);
  }

  public getAccessToken(): string | null {
    return this.getTokenFromLocalStorage(ACCESS_TOKEN_KEY);
  }

  public getRefreshToken(): string | null {
    return this.getTokenFromLocalStorage(REFRESH_TOKEN_KEY);
  }
}
