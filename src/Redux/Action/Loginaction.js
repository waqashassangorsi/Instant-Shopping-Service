import axios from 'axios';
import {BASE_URL} from '../Baseurl';

import {
  LOGIN_USER,
  SAVE_PASSWORD,
  LOGOUT_USER,
  SAVE_CHARITY,
  SIGNUP_USER,
} from './types';

export const loginaction = (data) => {
  return async (dispatch) => {
    console.log('inside dispathc', data);
    const res = await axios.post(`${BASE_URL}login_user`, data);

    if (res.data.status == true) {
      dispatch({
        type: LOGIN_USER,
        userdata: res.data.data,
        isLoggedIn: true,
      });
      return res;
    } else {
      return res;
    }
  };
};

export const signupwithfb = (data) => {
  return async (dispatch) => {
    console.log('inside dispathc', data);
    const res = await axios.post(`${BASE_URL}loginwithfacebook`, data);
    // console.log(`my res`, res);
    if (res.data.status == true) {
      dispatch({
        type: LOGIN_USER,
        userdata: res.data.user_record,
        isLoggedIn: true,
      });
      return res;
    } else {
      return res;
    }
  };
};

export const signupaction = (data) => {
  return async (dispatch) => {
    console.log('inside dispathc', data);
    const res = await axios.post(`${BASE_URL}signup_user`, data);

    if (res.data.status == true) {
      dispatch({
        type: LOGIN_USER,
        userdata: res.data.data,
        isLoggedIn: true,
      });
      return res;
    } else {
      return res;
    }
  };
};

export const changeUName = (data, auth) => {
  console.log(data);
  return async (dispatch) => {
    const res = await axios.post(
      `${BASE_URL}wp-json/winnerwish/v1/name_change`,
      data,
      {
        headers: {
          auth: auth,
        },
      },
    );
    console.log(res);
    return res;
  };
};
export const changeUPass = (data, auth) => {
  console.log(data);
  return async (dispatch) => {
    const res = await axios.post(
      `${BASE_URL}wp-json/winnerwish/v1/change_password`,
      data,
      {
        headers: {
          auth: auth,
        },
      },
    );
    console.log(res);
    return res;
  };
};
export const savePass = (data) => {
  console.log(data);
  return async (dispatch) => {
    try {
      dispatch({
        type: SAVE_PASSWORD,
        password: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const logoutUser = (data, auth) => {
  console.log(data);
  return async (dispatch) => {
    try {
      dispatch({
        type: LOGOUT_USER,
      });
    } catch (err) {}
  };
};
export const forgotPassword = (data) => {
  console.log(data);
  return async (dispatch) => {
    const res = await axios.post(
      `${BASE_URL}wp-json/winnerwish/v1/forget_password`,
      data,
    );
    console.log(res);
    return res;
  };
};
export const updatePassword = (data) => {
  console.log(data);
  return async (dispatch) => {
    const res = await axios.post(
      `${BASE_URL}wp-json/winnerwish/v1/reset_password`,
      data,
    );
    console.log(res);
    return res;
  };
};
export const saveCharity = (data) => {
  console.log(data);
  return async (dispatch) => {
    try {
      dispatch({
        type: SAVE_CHARITY,
        charityId: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

//sadam works starts here
export const getcity = (data) => {
  console.log(data);
  return async (dispatch) => {
    const res = await axios.get(`${BASE_URL}get_cities`, data);
    console.log(res);
    return res;
  };
};
export const getallbrands = (data) => {
  console.log(data);
  return async (dispatch) => {
    const res = await axios.get(`${BASE_URL}all_brands`, data);
    console.log(res);
    return res;
  };
};

export const getallcategory = (data) => {
  console.log(data);
  return async (dispatch) => {
    const res = await axios.get(`${BASE_URL}get_category`, data);
    console.log(res);
    return res;
  };
};

export const getallproducts = (data) => {
  console.log(data);
  return async (dispatch) => {
    const res = await axios.post(`${BASE_URL}all_products`, data);
    console.log(res);
    return res;
  };
};

export const getsingleProduct = (data) => {
  console.log(data);
  return async (dispatch) => {
    const res = await axios.post(`${BASE_URL}single_product`, data);
    console.log(res);
    return res;
  };
};

export const getuserRecord = (data) => {
  console.log(data);
  return async (dispatch) => {
    const res = await axios.post(`${BASE_URL}get_user`, data);
    console.log(res);
    return res;
  };
};

export const getuserOrder = (data) => {
  console.log(data);
  return async (dispatch) => {
    const res = await axios.post(`${BASE_URL}get_user_order`, data);
    console.log(res);
    return res;
  };
};

export const getorderDetail = (data) => {
  console.log(data);
  return async (dispatch) => {
    const res = await axios.post(`${BASE_URL}get_all_order_detail`, data);

    console.log(res);
    return res;
  };
};

export const getassignedOrder = (data) => {
  console.log(data);
  return async (dispatch) => {
    const res = await axios.post(`${BASE_URL}get_assigned_order_detail`, data);

    console.log(res);
    return res;
  };
};

export const acceptrejectOrder = (data) => {
  console.log(data);
  return async (dispatch) => {
    const res = await axios.post(`${BASE_URL}accept_reject_order`, data);

    console.log(res);
    return res;
  };
};

export const latLong = (data) => {
  console.log(data);
  return async (dispatch) => {
    const res = await axios.post(`${BASE_URL}user_location`, data);
    console.log(res);
    return res;
  };
};

//sadam works ends here
