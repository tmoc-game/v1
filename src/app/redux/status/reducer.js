import { STATUS_INIT } from '../types';

export default function reducer(state = { st: null }, action) {
  switch (action.type) {
    case STATUS_INIT:
      return { ...state, st: action.payload };
    default:
      return state;
  }
}
