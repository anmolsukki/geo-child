import axios from 'axios';
import * as actionTypes from '../ActionTypes/ActonTypes';
import { getHeaders } from '../Header/AuthHeader';

export const buyMagazineAction = (data) => {
  let url = `${process.env.REACT_APP_BASE_URL}/buy`;
  return async (dispatch) => {
    dispatch(actionTypes.BUY_INIT());
    return axios
      .post(url, data, { headers: await getHeaders(true) })
      .then((res) => {
        console.log(res, 'Buy Magazine Success');
        dispatch(actionTypes.BUY_SUCCESS(res.data));
      })
      .catch((error) => {
        console.log(error, 'Buy Magazine Error');
        dispatch(actionTypes.BUY_ERROR(error));
      });
  };
};
