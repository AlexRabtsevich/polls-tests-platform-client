import { useMemo } from 'react';

import { SecureAccountApi } from '../api/account-api';
import { useSecureApi } from './use-secure-api';

export const useSecureAccountApi = (): SecureAccountApi => {
  const accountApi = useSecureApi(SecureAccountApi);

  return useMemo(() => accountApi, [accountApi]);
};
