import {PRODUCTS} from '../Action/types';

const initialState = {
  products: [],
};

export const productsReducer = (state = initialState, action) => {
  console.log('STORE PRODUCTS: ', action.payload?.data);
  switch (action.type) {
    case PRODUCTS:
      return {
        products: [],
        products: [...action.payload.data],
      };

    default:
      return state;
  }
};
