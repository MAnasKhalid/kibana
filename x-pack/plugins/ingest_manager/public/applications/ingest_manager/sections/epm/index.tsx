/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import { useConfig } from '../../hooks';
import { Home } from './screens/home';
import { Detail } from './screens/detail';

export const EPMApp: React.FC = () => {
  const { epm } = useConfig();

  return epm.enabled ? (
    <Router>
      <Switch>
        <Route path="/epm/detail/:pkgkey/:panel?">
          <Detail />
        </Route>
        <Route path="/epm/">
          <Home />
        </Route>
      </Switch>
    </Router>
  ) : null;
};
