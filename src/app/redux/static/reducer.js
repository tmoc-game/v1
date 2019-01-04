import { INIT_STATIC_INFORMATION, SET_PRODUCTS, SET_INVENTORY } from '../types';

const initialState = {
  finish_day: -1,
  products: {},
  inventory: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INIT_STATIC_INFORMATION:
      return {
        ...state,
        products: action.payload.products,
        inventory: action.payload.inventory,
        finish_day: action.payload.finish_day,
      };
    case SET_PRODUCTS:
      return { ...state, products: action.payload };
    case SET_INVENTORY:
      return { ...state, inventory: action.payload };
    default:
      return state;
  }
}
