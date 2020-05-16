import axios from 'axios';
import * as actionTypes from '../ActionTypes/ActonTypes';
import { toast, Flip } from 'react-toastify';
import { getHeaders } from '../Header/AuthHeader';
import history from '../ActionHistory/ActionHistory';

export const LoginAction = (data) => {
  let url = `${process.env.REACT_APP_BASE_URL}/customer/login`;
  return async (dispatch) => {
    dispatch(actionTypes.LOGIN_INIT());
    return axios
      .post(url, data, { headers: await getHeaders(false) })
      .then((res) => {
        console.log(res, 'Auth Data Get Success');
        dispatch(actionTypes.LOGIN_SUCCESS(res.data));
        if (res.status === 200) {
          localStorage.setItem('token', res.data.data.token);
          debugger;
          toast.success(res.data.message, {
            autoClose: 1000,
            transition: Flip,
            onClose: () => history.push(`/home`),
          });
        }
      })
      .catch((error) => {
        console.log(error, 'Auth Data Error');
        dispatch(actionTypes.LOGIN_ERROR(error));
        toast.success(error.response.data.message, {
          autoClose: 1000,
          transition: Flip,
          onClose: () => alert('Called when I close'),
        });
      });
  };
};
