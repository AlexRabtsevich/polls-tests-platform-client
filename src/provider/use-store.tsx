import { ProfileStore, RootStore } from '../store';
import { useContext } from 'react';
import { RootStoreContext } from './root-store-provider';

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
