import { lazy } from 'react';

export enum Routes {
  Login = '/login',
  Registration = '/registration',
  Home = '/',
  Profile = '/profile',
  ErrorPage = '/error',
  CreateTest = '/create-test',
  CreatePoll = '/create-poll',
}

export const publicRouteList = [Routes.Login, Routes.Registration, Routes.Home, Routes.ErrorPage, Routes.CreatePoll];

export const routesWithComponent = [
  {
    path: Routes.Login,
    component: lazy(() => import('../pages/login')),
  },
  {
    path: Routes.Registration,
    component: lazy(() => import('../pages/registration')),
  },
  {
    path: Routes.Home,
    component: lazy(() => import('../pages/search')),
  },
  {
    path: Routes.ErrorPage,
    component: lazy(() => import('../pages/error')),
  },
  {
    path: Routes.CreatePoll,
    component: lazy(() => import('../pages/create-poll')),
  },
];
