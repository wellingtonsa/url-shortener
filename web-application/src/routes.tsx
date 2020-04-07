import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { RoutesPath } from 'constants/path';

import Landing from 'pages/Landing';
import Redirect from 'pages/Redirect';
import Analysis from 'pages/Analysis';

const Routes:React.SFC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={RoutesPath.LANDING} component={Landing} />
      <Route exact path={RoutesPath.ANALYSIS} component={Analysis} />
      <Route exact path={RoutesPath.REDIRECT} component={Redirect} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
