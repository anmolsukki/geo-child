import axios from 'axios';
import * as actionTypes from '../ActionTypes/ActonTypes';
import { getHeaders } from '../Header/AuthHeader';

export const LoginAction = () => {
  let url = `${process.env.REACT_APP_BASE_URL}/customer/login`;
  return async (dispatch) => {
    dispatch(actionTypes.LOGIN_INIT());
    return axios
      .get(url, { headers: await getHeaders(true) })
      .then((res) => {
        console.log(res, 'Auth Data Get Success');
        dispatch(actionTypes.LOGIN_SUCCESS(res.data));
      })
      .catch((error) => {
        console.log(error, 'Auth Data Error');
        dispatch(actionTypes.LOGIN_ERROR(error));
      });
  };
};
