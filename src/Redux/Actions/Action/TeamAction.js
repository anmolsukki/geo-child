import axios from 'axios';
import * as actionTypes from '../ActionTypes/ActonTypes';
import { getHeaders } from '../Header/AuthHeader';

export const teamAction = () => {
  let url = `${process.env.REACT_APP_BASE_URL}/members`;
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
