import axios from 'axios';
import * as actionTypes from '../ActionTypes/ActonTypes';
import { getHeaders } from '../Header/AuthHeader';

export const AllMagaZineAction = (data) => {
  let url;
  if (data.id === undefined) {
    url = `${process.env.REACT_APP_BASE_URL}/magzine?page=${data}&limit=100`;
  } else {
    url = `${process.env.REACT_APP_BASE_URL}/magzine/${data.id}`;
  }
  return async (dispatch) => {
    dispatch(actionTypes.MAGAZINE_INIT());
    return axios
      .get(url, { headers: await getHeaders(false) })
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

export const myMagaZineAction = () => {
  let url = `${process.env.REACT_APP_BASE_URL}/customer/me`;
  return async (dispatch) => {
    dispatch(actionTypes.MY_MAGAZINE_INIT());
    return axios
      .get(url, { headers: await getHeaders(true) })
      .then((res) => {
        console.log(res, 'Get My Magazine Success');
        dispatch(actionTypes.MY_MAGAZINE_SUCCESS(res.data.data));
      })
      .catch((error) => {
        console.log(error, 'Get My Magazine Error');
        dispatch(actionTypes.MY_MAGAZINE_ERROR(error));
      });
  };
};

export const viewMagaZineAction = (pdf) => {
  let url = `${process.env.REACT_APP_BASE_URL}/magzine/${pdf.pdf}`;
  return async (dispatch) => {
    dispatch(actionTypes.VIEW_MAGAZINE_INIT());
    return axios
      .get(url, { headers: await getHeaders(true) })
      .then((res) => {
        console.log(res, 'View Magazine Success');
        dispatch(actionTypes.VIEW_MAGAZINE_SUCCESS(res));
      })
      .catch((error) => {
        console.log(error, 'View Magazine Error');
        dispatch(actionTypes.VIEW_MAGAZINE_ERROR(error));
      });
  };
};
