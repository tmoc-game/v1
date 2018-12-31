import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import createStore from './redux/createStore';
import LoginPage from './pages/login';
import MenuPage from './pages/menu';
import InventoryPage from './pages/inventory';

import './css/css.css';

const MOUNT_NODE = document.getElementById('app');
const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={LoginPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/menu" component={MenuPage} />
        <Route path="/inventory" component={InventoryPage} />
      </div>
    </Router>
  </Provider>,
  MOUNT_NODE
);
