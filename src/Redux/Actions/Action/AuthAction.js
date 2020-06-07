import axios from 'axios';
import { toast, Flip } from 'react-toastify';
import swal from 'sweetalert';
import * as actionTypes from '../ActionTypes/ActonTypes';
import { getHeaders } from '../Header/AuthHeader';
import history from '../ActionHistory/ActionHistory';

export const LoginAction = (data) => {
  let url = `${process.env.REACT_APP_BASE_URL}/customer/login`;
  return async (dispatch) => {
    dispatch(actionTypes.LOGIN_INIT());
    return axios
      .post(url, data, { headers: await getHeaders(false) })
      .then((res) => {
        console.log(res, 'Login Success');
        dispatch(actionTypes.LOGIN_SUCCESS(res.data));
        if (res.status === 200) {
          localStorage.setItem('token', res.data.data.token);
          localStorage.setItem('name', res.data.data.name);
          history.push(`/home`);
        }
      })
      .catch((error) => {
        console.log(error, 'Login Error');
        dispatch(actionTypes.LOGIN_ERROR(error));
        toast.success(error.response.data.message, {
          autoClose: 1000,
          transition: Flip,
        });
      });
  };
};

export const RegisterAction = (data) => {
  let url = `${process.env.REACT_APP_BASE_URL}/customer/signup`;
  return async (dispatch) => {
    dispatch(actionTypes.REG_INIT());
    return axios
      .post(url, data, { headers: await getHeaders(false) })
      .then((res) => {
        console.log(res, 'Register Success');
        dispatch(actionTypes.REG_SUCCESS(res.data));
        if (res.status === 200) {
          swal({
            title: 'Success',
            icon: 'success',
            dangerMode: false,
            button: 'OK',
          }).then((result) => {
            if (result) {
              history.push('/login');
            }
          });
        }
      })
      .catch((error) => {
        console.log(error, 'Register Error');
        dispatch(actionTypes.REG_ERROR(error));
        toast.success(error.response.data.message, {
          autoClose: 1000,
          transition: Flip,
        });
      });
  };
};

export const ForgotAction = (data) => {
  let url = `${process.env.REACT_APP_BASE_URL}/customer/forgot-password`;
  return async (dispatch) => {
    dispatch(actionTypes.FORGOT_INIT());
    return axios
      .post(url, data, { headers: await getHeaders(false) })
      .then((res) => {
        console.log(res, 'Forgot Success');
        dispatch(actionTypes.FORGOT_SUCCESS(res.data));
        if (res.status === 200) {
          swal({
            title: 'Mail Sent, Please Check!',
            icon: 'success',
            dangerMode: false,
            button: 'OK',
          }).then((result) => {
            if (result) {
              window.location.reload();
            }
          });
        }
      })
      .catch((error) => {
        console.log(error, 'Forgot Error');
        dispatch(actionTypes.FORGOT_ERROR(error));
        toast.success(error.response.data.message, {
          autoClose: 1000,
          transition: Flip,
        });
      });
  };
};

export const googleLoginAction = () => {
  let url = `${process.env.REACT_APP_BASE_URL}/customer/google-auth`;
  return async (dispatch) => {
    dispatch(actionTypes.GOOGLE_LOGIN_INIT());
    return axios
      .get(url, { headers: await getHeaders(false) })
      .then((res) => {
        console.log(res, 'Google Login Success');
        dispatch(actionTypes.GOOGLE_LOGIN_SUCCESS(res));
      })
      .catch((error) => {
        console.log(error, 'Google Login Error');
        dispatch(actionTypes.LOGIN_ERROR(error));
      });
  };
};
