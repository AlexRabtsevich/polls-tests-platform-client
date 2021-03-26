import { AxiosRequestConfig } from 'axios';

import { GetTokenFunction } from '../../typings';

export const getAuthorizationHeader = (authorizationToken: string) => ({
  Authorization: `Bearer ${authorizationToken}`,
});

export const withAuthorizationHeader = async (getToken: GetTokenFunction, config: AxiosRequestConfig) => {
  const authorizationToken = await getToken();

  if (authorizationToken) {
    Object.assign(config.headers, getAuthorizationHeader(authorizationToken));
  }

  return config;
};
