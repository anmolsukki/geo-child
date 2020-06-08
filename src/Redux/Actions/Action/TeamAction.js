import axios from 'axios';
import * as actionTypes from '../ActionTypes/ActonTypes';
import { getHeaders } from '../Header/AuthHeader';

export const teamAction = () => {
  let url = `${process.env.REACT_APP_BASE_URL}/members?page=1&limit=100`;
  return async (dispatch) => {
    dispatch(actionTypes.TEAM_INIT());
    return axios
      .get(url, { headers: await getHeaders(false) })
      .then((res) => {
        console.log(res, 'Team Success');
        dispatch(actionTypes.TEAM_SUCCESS(res.data.data));
      })
      .catch((error) => {
        console.log(error, 'Team Error');
        dispatch(actionTypes.TEAM_ERROR(error));
      });
  };
};

export const noticesAction = () => {
  let url = `${process.env.REACT_APP_BASE_URL}/notices`;
  return async (dispatch) => {
    dispatch(actionTypes.NOTICE_INIT());
    return axios
      .get(url, { headers: await getHeaders(false) })
      .then((res) => {
        console.log(res, 'Notice Success');
        dispatch(actionTypes.NOTICE_SUCCESS(res.data.data));
      })
      .catch((error) => {
        console.log(error, 'Notice Error');
        dispatch(actionTypes.NOTICE_ERROR(error));
      });
  };
};
