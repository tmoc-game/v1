import axios from 'axios';
import { SET_PRODUCTS, SET_INVENTORY, INIT_STATIC_INFORMATION } from '../types';
import { setGameStatus } from '../status/actions';

export function initStaticInformation(finishDay, products, inventory) {
  return {
    type: INIT_STATIC_INFORMATION,
    payload: {
      finish_day: finishDay,
      products,
      inventory,
    }
  };
}
export function setProducts(products) {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
}

export function setInventory(inventory) {
  return {
    type: SET_INVENTORY,
    payload: inventory,
  };
}

export function loadDefaultSettings() {
  return (dispatch) => {
    // api call
    axios.get('/api/load_default_settings')
      .then((res) => {
        const { data } = res;
        dispatch(initStaticInformation(
          data.finish_day,
          data.products,
          data.inventory,
        ));
        dispatch(setGameStatus(data.game_status));
      })
      .catch((err) => {
        alert('Default Setting Load fail');
        console.log(err);
      });
  };
}
