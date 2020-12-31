import React from 'react';
import ReactDOM from 'react-dom';

// Font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import LoginPage from './pages/LoginPage';
import WaitingPage from './pages/WaitingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

library.add(
  faInfoCircle
);

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/waiting">
        <WaitingPage />
      </Route>
      <Route path="/">
        <LoginPage />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);
