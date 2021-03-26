import React, { FC } from 'react';
import { useLocation, Redirect, RouteProps, Route } from 'react-router-dom';

import { useProfileStore } from '../provider';
import { publicRouteList, Routes } from './routes';
import { IAlertHandlingQueryState } from '../common/typings';

export const PrivateRouterWrapper: FC<RouteProps> = (routeProps) => {
  const profileStore = useProfileStore();
  const location = useLocation();

  if (!profileStore.isAuthorized && !publicRouteList.includes(location.pathname as Routes)) {
    return (
      <Redirect to={{ pathname: Routes.Login, state: { message: 'Please login to', isShowInfoAlert: true } as IAlertHandlingQueryState }} />
    );
  }

  return <Route {...routeProps} />;
};
