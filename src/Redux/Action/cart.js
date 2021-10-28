import axios from 'axios';
import {BASE_URL} from '../Baseurl';
import {
  ADD_TO_CART,
  UPDATE_TOTAL_PRICE,
  APPLY_VOUCHER,
  COMPETITION_USER,
  DELETE_FROM_CART,
  USER_DETAIL,
  UPDATE_CART,
  PRODUCTS,
} from './types';
import {Alert} from 'react-native';

// export const allproducts = (data) => {
//   return async (dispatch) => {
//     console.log('STORE reduxfunction allproducts: ', data);
//     try {
//       dispatch({
//         type: PRODUCTS,
//         payload: {
//           data,
//         },
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };

export const addToCart = (data, totalPrice) => {
  return async (dispatch) => {
    console.log('reducfunctin', data);
    try {
      dispatch({
        type: ADD_TO_CART,
        payload: {
          data: {
            img: data.product_img,
            price: data.price,
            qty: data.qty,
            productid: data.from,
            name: data.product_name,
            //desc: data.product_description,
          },
          total: totalPrice,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const userAddress = (data1) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: USER_DETAIL,
        data: {
          city: data1.city,
          location: data1.location,
          address: data1.address,
          landmark: data1.landmark,
          cityId: data1.cityId,
          locationId: data1.locationId,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteToCart = (cart, price) => {
  console.log('deleteToCart: ', cart, price);
  return async (dispatch) => {
    try {
      dispatch({
        type: DELETE_FROM_CART,
        addToCart: cart,
        totalPrice: price,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateTotalPrice = (totalPrice) => {
  return async (dispatch) => {
    try {
      // return res;

      dispatch({
        type: UPDATE_TOTAL_PRICE,

        totalPrice: totalPrice,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateStatus = (data, token) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        `${BASE_URL}//wp-json/winnerwish/v1/top_up`,
        data,
        {
          headers: {
            auth: token,
          },
        },
      );
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
    }
  };
};

export const placeorder = (data, auth) => {
  return async (dispatch) => {
    const res = await axios.post(
      `${BASE_URL}wp-json/winnerwish/v1/place_order`,
      data,
      {
        headers: {
          auth: auth,
        },
      },
    );
    console.log('=====>', res);

    if (res.data.status) {
      dispatch({
        type: ADD_TO_CART,
        addToCart: [],
        totalPrice: 0,
      });
      return res;
    } else {
      alert(res.data.message);
      return res;
    }
  };
};

export const applyCoupon = (data, totalPrice) => {
  return async (dispatch) => {
    const res = await axios.post(
      `${BASE_URL}wp-json/winnerwish/v1/check_voucher`,
      data,
    );
    console.log('=====>', res.data);

    if (!res.data.error) {
      Alert.alert('Congrats', res.data.success_msg);
      dispatch({
        type: APPLY_VOUCHER,

        totalPrice: totalPrice - parseFloat(res?.data?.voucher_detail?.vprice),
      });
      return res;
    } else {
      alert(res.data.error_msg);
      return res;
    }
  };
};

export const instantBuy = (data, instantTotal) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'INSTANT_BUY',
        data: data,
        instantTotal: instantTotal,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateCart = (cart, price) => {
  console.log('updateCart: ', cart, price);
  return async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_CART,
        addToCart: cart,
        totalPrice: price,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
