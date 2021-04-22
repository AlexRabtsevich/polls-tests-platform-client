import { lazy } from 'react';

export enum Routes {
  Login = '/login',
  Registration = '/registration',
  Search = '/',
  Profile = '/profile',
  ErrorPage = '/error',
  CreateTest = '/create-test',
  CreatePoll = '/create-poll',
  PollAnswer = '/poll-answer/:id',
}

export const publicRouteList = [Routes.Login, Routes.Registration, Routes.Search, Routes.ErrorPage, Routes.CreatePoll];

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
    path: Routes.Search,
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
  {
    path: Routes.CreateTest,
    component: lazy(() => import('../pages/create-test')),
  },
  {
    path: Routes.PollAnswer,
    component: lazy(() => import('../pages/poll-answer')),
  },
];
