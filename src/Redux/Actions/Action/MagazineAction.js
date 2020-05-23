import axios from 'axios';
import * as actionTypes from '../ActionTypes/ActonTypes';
import { getHeaders } from '../Header/AuthHeader';

export const AllMagaZineAction = (page) => {
  let url = `${process.env.REACT_APP_BASE_URL}/magzine?page=${page}&limit=10`;
  return async (dispatch) => {
    dispatch(actionTypes.MAGAZINE_INIT());
    return axios
      .get(url, { headers: await getHeaders(true) })
      .then((res) => {
        console.log(res, 'Get Magazine Success');
        dispatch(actionTypes.MAGAZINE_SUCCESS(res.data.data));
      })
      .catch((error) => {
        console.log(error, 'Get Magazine Error');
        dispatch(actionTypes.MAGAZINE_ERROR(error));
      });
  };
};
