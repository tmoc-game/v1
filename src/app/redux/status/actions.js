import * as t from '../types';

export function setGameStatus(status) {
  return {
    type: t.SET_GAME_STATUS,
    payload: status,
  };
}
