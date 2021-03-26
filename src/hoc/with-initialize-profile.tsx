import React, { ComponentType, useEffect } from 'react';

import { useBaseAuthorizationService, useSecureAccountApi } from '../common/hook';
import { useProfileStore } from '../provider';

export const withInitializeProfile = <T extends {}>(Component: ComponentType<T>) => {
  return (props: T) => {
    const baseAuthorizationService = useBaseAuthorizationService();
    const profileStore = useProfileStore();
    const secureAccountApi = useSecureAccountApi();

    useEffect(() => {
      if (baseAuthorizationService.isAuthorized()) {
        secureAccountApi.getProfile().then((profile) => profileStore.setProfile(profile));
      }
    }, [baseAuthorizationService, profileStore, secureAccountApi]);

    return <Component {...props} />;
  };
};
