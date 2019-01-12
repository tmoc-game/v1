import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import createStore from './redux/createStore';
import MenuPage from './pages/menu';
import InventoryPage from './pages/inventory';
import SellPage from './pages/sell';
import BuyPage from './pages/buy';
import EndPage from './pages/ending';

import AuthWrapper from './components/authwrapper';

import { loadDefaultSettings } from './redux/static/actions';

import { init } from './util/fb';

import './css/css.css';

init();

const MOUNT_NODE = document.getElementById('app');
const store = createStore();

// Load Default Data
store.dispatch(loadDefaultSettings());

ReactDOM.render(
  <Provider store={store}>
    <AuthWrapper>
      <Router>
        <div>
          <Route exact path="/" component={MenuPage} />
          <Route path="/inventory" component={InventoryPage} />
          <Route path="/sell" component={SellPage} />
          <Route path="/buy" component={BuyPage} />
          <Route path="/ending" component={EndPage} />
        </div>
      </Router>
    </AuthWrapper>
  </Provider>,
  MOUNT_NODE
);
