import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import { LoaderFullScreen } from './common/components/loader';
import { withAlertHandling, withInitializeProfile } from './hoc';
import { PrivateRouterWrapper, routesWithComponent } from './routes';
import { Header } from './common/components/header';

function App() {
  return (
    <Suspense fallback={<LoaderFullScreen isOpen />}>
      <Header />

      <Switch>
        {routesWithComponent.map((router) => (
          <PrivateRouterWrapper path={router.path} key={router.path} component={router.component} exact />
        ))}
        <Route path='*' component={lazy(() => import('./pages/error'))} />
      </Switch>
    </Suspense>
  );
}

export default withInitializeProfile(App);
