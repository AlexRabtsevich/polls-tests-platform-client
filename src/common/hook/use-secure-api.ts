import { useMemo } from 'react';

import { SecureAuthorizationService } from '../services/authorization-service';
import { RefreshTokenApi } from '../api/account-api';
import { SecureHttpClient } from '../api/http-clients';

type ApiClassType<T> = { new (secureAuthorizationService: SecureAuthorizationService): T };

export const useSecureApi = <T extends SecureHttpClient>(Api: ApiClassType<T>): T => {
  return useMemo(() => {
    const refreshTokenApi = new RefreshTokenApi();

    const secureAuthorizationService: SecureAuthorizationService = new SecureAuthorizationService(
      refreshTokenApi.refreshTokenRequest.bind(refreshTokenApi),
    );

    return new Api(secureAuthorizationService);
  }, [Api]);
};
