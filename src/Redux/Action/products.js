import {PRODUCTS} from './types';

export const allproducts = (data) => {
  return async (dispatch) => {
    console.log('STORE reduxfunction allproducts: ', data);
    try {
      dispatch({
        type: PRODUCTS,
        payload: {
          data,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
};
