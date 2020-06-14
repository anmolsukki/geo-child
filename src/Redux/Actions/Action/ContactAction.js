import axios from 'axios';
import { toast, Flip } from 'react-toastify';
import swal from 'sweetalert';
import * as actionTypes from '../ActionTypes/ActonTypes';
import { getHeaders } from '../Header/AuthHeader';

export const contactusAction = (data) => {
  let url = `${process.env.REACT_APP_BASE_URL}/customer/contact-us`;
  return async (dispatch) => {
    dispatch(actionTypes.CONTACT_INIT());
    return axios
      .post(url, data, { headers: await getHeaders(true) })
      .then((res) => {
        console.log(res, 'Contact Submitted');
        dispatch(actionTypes.CONTACT_SUCCESS(res.data));
        if (res.status === 200) {
          swal({
            title: 'Success',
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
        console.log(error, 'Contact Error');
        dispatch(actionTypes.CONTACT_ERROR(error));
        toast.success(error.response.data.message, {
          autoClose: 1000,
          transition: Flip,
        });
      });
  };
};

export const feedbackAction = (data) => {
  let url = `${process.env.REACT_APP_BASE_URL}/feedback`;
  return async (dispatch) => {
    dispatch(actionTypes.FEEDBACK_INIT());
    return axios
      .post(url, data, { headers: await getHeaders(true) })
      .then((res) => {
        console.log(res, 'Feedback Submitted');
        dispatch(actionTypes.FEEDBACK_SUCCESS(res.data));
        if (res.status === 201) {
          swal({
            title: 'Success',
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
        console.log(error, 'Feedback Error');
        dispatch(actionTypes.FEEDBACK_ERROR(error));
        toast.success(error.response.data.message, {
          autoClose: 1000,
          transition: Flip,
        });
      });
  };
};
