import { useMemo } from 'react';

import { BaseAccountApi } from '../api/account-api';

export const useBaseAccountApi = (): BaseAccountApi => {
  return useMemo(() => new BaseAccountApi(), []);
};
