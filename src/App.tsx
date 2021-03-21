import React, { Suspense } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { routesWithComponent } from './common/utils/routes';
import { CircularProgress } from '@material-ui/core';

function App() {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Switch>
        {routesWithComponent.map((router) => (
          <Route path={router.path} key={router.path} component={router.component} exact />
        ))}
      </Switch>
    </Suspense>
  );
}

export default App;
