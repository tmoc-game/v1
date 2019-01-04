import { SET_GAME_STATUS } from '../types';

const initialState = {
  day: -2,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_GAME_STATUS:
      return { ...action.payload };
    default:
      return state;
  }
}
