import React from 'react';
import ReactDOM from 'react-dom';

// Font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import LoginPage from './pages/LoginPage';
import WaitingPage from './pages/WaitingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

library.add(
  faInfoCircle
);

ReactDOM.render(
  <React.StrictMode>
    <WaitingPage />
  </React.StrictMode>,
  document.getElementById('root')
);
