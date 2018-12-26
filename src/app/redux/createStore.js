import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import statusReducer from './status/reducer';

const rootReducer = combineReducers({
  status: statusReducer,
});

export default function create() {
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  );

  return store;
}
