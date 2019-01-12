import { SET_LOGIN_STATUS } from '../types';

const initialState = {
  loginStatus: -1, // -1 : not yet checked , 0 : not loggined, 1: loggined
  user: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOGIN_STATUS:
      return { ...action.payload };
    default:
      return state;
  }
}
