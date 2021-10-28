import {PRODUCTS} from '../Action/types';

const initialState = {
  products: [],
};

export const productsReducer = (state = initialState, action) => {
  console.log('STORE PRODUCTS: ', action);
  switch (action.type) {
    case PRODUCTS:
      return {
        ...state,
        ...state.products.push(action.payload.data),
      };
    default:
      return state;
  }
};
