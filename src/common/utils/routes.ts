import { lazy } from 'react';

export enum Routes {
  Login = '/login',
  Registration = '/registration',
  Home = '/',
  Search = '/search',
}

export const routesWithComponent = [
  {
    path: Routes.Login,
    component: lazy(() => import('../../pages/login')),
  },
  {
    path: Routes.Registration,
    component: lazy(() => import('../../pages/registration')),
  },
];
