/* eslint-disable no-alert, no-restricted-globals */
import axios from 'axios';
import * as t from '../types';

function goTo(path) {
  window.location.href = `#${path}`;
}

export function setGameStatus(status) {
  return {
    type: t.SET_GAME_STATUS,
    payload: status,
  };
}


export function getCurrentGameStatus() {
  return (dispatch) => {
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

export function startANewGame(isContinueAvaliable) {
  return (dispatch) => {
    if (
      isContinueAvaliable &&
      !confirm('Do you want to delete existing game?')
    ) {
      return;
    }

    axios.post('/api/newgame')
      .then((res) => {
        const { data } = res;
        if (data.result === 0) {
          dispatch(setGameStatus({ day: -2 }));
          goTo('inventory');
        } else {
          throw data.message;
        }
      })
      .catch((err) => {
        alert(`New Game start error ${err}`);
        console.log(err);
      });
  };
}

export function upgradeInventory(nextLevelInventory) {
  return (dispatch) => {
    if (nextLevelInventory == null) {
      alert('You are reached maximum level.');
      return null;
    }
    if (
      nextLevelInventory != null &&
      !confirm(`Do you want to upgrade?\nUpgrade Price : ${nextLevelInventory.upgrade_price}, \nRent fee : ${nextLevelInventory.daily_price}`)
    ) {
      return null;
    }

    return axios.put('/api/inventory/upgrade')
      .then((res) => {
        const { data } = res;
        if (data.result === 0) {
          dispatch(getCurrentGameStatus());
        } else {
          throw data.message;
        }
      })
      .catch((err) => {
        alert(`Upgrade Invetory error ${err}`);
        console.log(err);
      });
  };
}

export function downgradeInventory(nextLevelInventory) {
  return (dispatch) => {
    if (nextLevelInventory == null) {
      alert('You are in minimum level.');
      return null;
    }
    if (
      nextLevelInventory != null &&
      !confirm('Do you want to downgrade?')
    ) {
      return null;
    }

    return axios.put('/api/inventory/downgrade')
      .then((res) => {
        const { data } = res;
        if (data.result === 0) {
          dispatch(getCurrentGameStatus());
        } else {
          throw data.message;
        }
      })
      .catch((err) => {
        alert(`Downgrade Invetory error ${err}`);
        console.log(err);
      });
  };
}

export function sleep() {
  return (dispatch) => {
    if (!confirm('Do you want to sleep?')) {
      return {};
    }

    return axios.put('/api/sleep')
      .then((res) => {
        const { data } = res;
        if (data.result === 0x0000) {
          dispatch(getCurrentGameStatus());
        } else if (data.result === 0x0001) {
          goTo('ending');
        } else {
          throw data.message;
        }
      })
      .catch((err) => {
        alert(`Sleep error ${err}`);
        console.log(err);
      });
  };
}

export function buy(code, quantity) {
  return (dispatch) => {
    if (!confirm('Do you want to buy?')) {
      return {};
    }

    return axios.put(`/api/buy/${code}/${quantity}`)
      .then((res) => {
        const { data } = res;
        if (data.result === 0x0000) {
          dispatch(getCurrentGameStatus());
        } else {
          throw data.message;
        }
      })
      .catch((err) => {
        alert(`Buy error ${err}`);
        console.log(err);
      });
  };
}

export function sell(code, quantity) {
  return (dispatch) => {
    if (!confirm('Do you want to sell?')) {
      return {};
    }

    return axios.put(`/api/sell/${code}/${quantity}`)
      .then((res) => {
        const { data } = res;
        if (data.result === 0x0000) {
          dispatch(getCurrentGameStatus());
        } else {
          throw data.message;
        }
      })
      .catch((err) => {
        alert(`Sell error ${err}`);
        console.log(err);
      });
  };
}
