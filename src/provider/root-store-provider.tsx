import React, { createContext, FC } from 'react';
import { RootStore } from '../store';

const rootStore = new RootStore();
export const RootStoreContext = createContext<RootStore | undefined>(undefined);

export const RootStoreProvider: FC = ({ children }) => {
  const root = rootStore ?? new RootStore();

  return <RootStoreContext.Provider value={root}>{children}</RootStoreContext.Provider>;
};
