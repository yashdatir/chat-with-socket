import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { directory } from './directory';

export default function Routes() {
  return (
    <div>
      <Router>
        <Switch>
          {directory.map((direct) => (
            <Route
              path={direct.path}
              component={direct.component}
              exact={direct.exact}
              reducer={direct.reducer}
              actions={direct.actions}
            />
          ))}
        </Switch>
      </Router>
    </div>
  );
}
