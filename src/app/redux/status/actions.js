import axios from 'axios';
import * as t from '../types';

export function setGameStatus(status) {
  return {
    type: t.SET_GAME_STATUS,
    payload: status,
  };
}


export function getCurrentGameStatus() {
  return (dispatch) => {
    // api call
    axios.get('/api/game_status')
      .then((res) => {
        const { data } = res;
        dispatch(setGameStatus(data));
      })
      .catch((err) => {
        alert('Default Setting Load fail');
        console.log(err);
      });
  };
}
