import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAILURE,
  UPDATE_LOGIN_STATE,
  UPDATE_SIGNUP_STATE
} from "./../constants/user";
import axios from "axios";

export const Login = (values, auth) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const apiToken = '4589fcd7d889088b8607861149fb5b2d';
    const resData = await axios.post(
      `https://api.demo-available.com/api/user/login`,
      {
        vEmail: values.vEmail,
        vPassword: values.vPassword,
        vGoogleRecaptchaResponse: values.vGoogleRecaptchaResponse
      },
      {
        headers: {
          'Authorization': `Bearer ${apiToken}`,
          'Content-Type': 'application/json'
        }
      }
    );

    // console.log("data",resData.data);
    dispatch({ type: LOGIN_SUCCESS, payload: resData.data });

    if (resData.data.status == 200) {
      localStorage.setItem("Auth", resData.data.user_auth);
      // console.log(resData.data.user_auth);
      // const resData0 = await axios.post(
      //   'https://api.demo-available.com/api/user/profile',
      //   {},
      //   {
      //     headers: {
      //       "Authorization": "Bearer 4589fcd7d889088b8607861149fb5b2d",
      //       "User-Auth": resData.data.user_auth
      //     }
      //   }
      // );
      // if (resData0.data.status == 200) {
      //   // console.log(resData0.data.data.iUserId);
      //   localStorage.setItem("iUserId", resData0.data.data.iUserId);
      // }
    }
    setTimeout(() => {
      dispatch({ type: UPDATE_LOGIN_STATE });
    }, 2000);
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE });
  }
}

export const Register = (values) => async (dispatch) => {
  try {
    dispatch({ type: SIGNUP_REQUEST });
    const apiToken = '4589fcd7d889088b8607861149fb5b2d';
    const resData = await axios.post(
      `https://api.demo-available.com/api/user/register`,
      values, {
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'Content-Type': 'application/json'
      }
    }
    );
    localStorage.setItem("id", resData.data.iUserId)
    dispatch({ type: SIGNUP_SUCCESS, payload: resData.data });
    setTimeout(() => {
      dispatch({ type: UPDATE_SIGNUP_STATE });
    }, 2000);
  } catch (err) {
    dispatch({ type: SIGNUP_FAILURE });
  }
};

export const getProfile = (auth) => async (dispatch) => {
  try {

    dispatch({ type: USER_PROFILE_REQUEST });
    const resData = await axios.post(
      'https://api.demo-available.com/api/user/profile',
      {},
      {
        headers: {
          "Authorization": "Bearer 4589fcd7d889088b8607861149fb5b2d",
          "User-Auth": auth
        }
      }
    );
    dispatch({ type: USER_PROFILE_SUCCESS, payload: resData.data.data });
    if (resData.data.status == 200) {
      console.log(resData.data.data.iUserId);
      localStorage.setItem("iUserId", resData.data.data.iUserId);
    }
  } catch (error) {
    dispatch({ type: USER_PROFILE_FAILURE });
  }
}