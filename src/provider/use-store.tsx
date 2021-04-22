import { ProfileStore, RootStore } from '../store';
import { useContext } from 'react';
import { RootStoreContext } from './root-store-provider';
import { SearchFiltersStore } from '../store/search-filters-store';
import { PaginationStore } from '../store/pagination-store';
import { SearchStore } from '../store/search-store';
import { LoaderStore } from '../store/loader-store';

export const useRootStore = (): RootStore => {
  const context = useContext(RootStoreContext);

  if (context === undefined) {
    throw new Error('useRootStore must be used within RootStoreProvider');
  }

  return context;
};

export const useProfileStore = (): ProfileStore => {
  const { profileStore } = useRootStore();

  return profileStore;
};

export const useSearchFiltersStore = (): SearchFiltersStore => {
  const { searchFiltersStore } = useRootStore();

  return searchFiltersStore;
};

export const usePaginationStore = (): PaginationStore => {
  const { paginationStore } = useRootStore();

  return paginationStore;
};

export const useSearchStore = (): SearchStore => {
  const { searchStore } = useRootStore();

  return searchStore;
};

export const useLoaderStore = (): LoaderStore => {
  const { loaderStore } = useRootStore();

  return loaderStore;
};
