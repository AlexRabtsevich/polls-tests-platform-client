export interface ILogin {
  email: string;
  password: string;
}

export interface ICreateAccount {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface IAuthorizationPayload {
  accessToken: string;
  refreshToken: string;
}

export interface ITokenPayload {
  userId: string;
  iat: number;
  exp: number;
}

export type GetTokenFunction = () => Promise<string | null>;
