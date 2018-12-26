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

const MOUNT_NODE = document.getElementById('app');
const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={MenuPage} />
        <Route path="/login" component={LoginPage} />
      </div>
    </Router>
  </Provider>,
  MOUNT_NODE
);
