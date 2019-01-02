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
import SellPage from './pages/sell';
import BuyPage from './pages/buy';
import EndPage from './pages/ending';

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
        <Route path="/sell" component={SellPage} />
        <Route path="/buy" component={BuyPage} />
        <Route path="/ending" component={EndPage} />
      </div>
    </Router>
  </Provider>,
  MOUNT_NODE
);
