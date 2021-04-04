import React, { Suspense } from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { LoaderFullScreen } from './common/components/loader';
import { withAlertHandling, withInitializeProfile } from './hoc';
import { PrivateRouterWrapper, Routes, routesWithComponent } from './routes';
import { Header } from './common/components/header';

function App() {
  return (
    <Suspense fallback={<LoaderFullScreen isOpen />}>
      <Header />
      <Switch>
        {routesWithComponent.map((router) => (
          <PrivateRouterWrapper path={router.path} key={router.path} component={router.component} exact />
        ))}
        <Redirect to={Routes.ErrorPage} />
      </Switch>
    </Suspense>
  );
}

export default withInitializeProfile(App);
