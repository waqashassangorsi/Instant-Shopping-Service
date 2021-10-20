import {
  ADD_TO_CART,
  UPDATE_TOTAL_PRICE,
  APPLY_VOUCHER,
  DELETE_FROM_CART,
  USER_DETAIL,
} from '../Action/types';

const initialState = {
  userCart: [],
  userdetails: [],
  totalPrice: 0.0,
  instntBuy: null,
};
export const cartReducer = (state = initialState, action) => {
  console.log('datavalue', action);
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        ...state.userCart.push(action.payload.data),
        // userCart: [action.payload.data, ...state.addToCart],
        // totalPrice: state.totalPrice + action.payload.total,
      };
    case DELETE_FROM_CART:
      return {
        ...state,
        userCart: {...state.userCart.splice(action.payload.id, 1)},
        totalPrice: state.totalPrice - action.payload.total,
      };
    case USER_DETAIL:
      return {
        ...state,
        userdetails: action.data,
      };

    case UPDATE_TOTAL_PRICE:
      return {
        ...state,

        totalPrice: action.totalPrice,
      };
    case APPLY_VOUCHER:
      return {
        ...state,

        totalPrice: action.totalPrice,
      };
    case 'INSTANT_BUY':
      return {
        ...state,

        instntBuy: action.data,
      };
    case 'UPDATE_CART':
      return {
        ...state,

        userCart: action.addToCart,
        totalPrice: action.totalPrice,
      };

    default:
      return state;
  }
};
