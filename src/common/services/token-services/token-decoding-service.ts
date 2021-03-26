import jwtDecode from 'jwt-decode';

import { ITokenPayload } from '../../typings';

const MILLISECONDS_IN_SECOND = 1000;

export class TokenDecodingService {
  public getUserId(token: string): string {
    const { userId } = jwtDecode<ITokenPayload>(token);

    return userId;
  }

  public isTokenExpired(token: string): boolean {
    const { exp } = jwtDecode<ITokenPayload>(token);

    return this.getTokenExpirationDate(exp) < new Date();
  }

  private getTokenExpirationDate(exp: number): Date {
    return new Date(exp * MILLISECONDS_IN_SECOND);
  }
}
