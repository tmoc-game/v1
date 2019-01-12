import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import statusReducer from './status/reducer';
import staticReducer from './static/reducer';
import authReducer from './auth/reducer';


const rootReducer = combineReducers({
  status: statusReducer,
  static: staticReducer,
  auth: authReducer,
});

export default function create() {
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  );

  return store;
}
