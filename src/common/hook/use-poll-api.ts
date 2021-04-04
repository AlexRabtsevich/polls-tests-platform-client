import { useMemo } from 'react';

import { useSecureApi } from './use-secure-api';
import { PollApi } from '../api/poll-api';

export const usePollApi = (): PollApi => {
  const pollApi = useSecureApi(PollApi);

  return useMemo(() => pollApi, [pollApi]);
};
