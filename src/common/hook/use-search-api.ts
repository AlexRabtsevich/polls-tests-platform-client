import { useMemo } from 'react';
import { SearchApi } from '../api/search-api';

export const useSearchApi = (): SearchApi => {
  return useMemo(() => new SearchApi(), []);
};
