import { useMemo } from 'react';

import { BaseAuthorizationService } from '../services/authorization-service';

export const useBaseAuthorizationService = (): BaseAuthorizationService => {
  return useMemo(() => {
    return new BaseAuthorizationService();
  }, []);
};
