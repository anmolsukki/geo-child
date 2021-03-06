import * as actionConstant from '../ActionConstant/ActionConstant';

export const LOGIN_INIT = () => ({ type: actionConstant.LOGIN_DATA_INIT });
export const LOGIN_SUCCESS = (data) => ({
  type: actionConstant.LOGIN_DATA_SUCCESS,
  data: data,
});
export const LOGIN_ERROR = (data) => ({ type: actionConstant.GOOGLE_LOGIN_DATA_ERROR, data: data });

export const GOOGLE_LOGIN_INIT = () => ({ type: actionConstant.GOOGLE_LOGIN_DATA_INIT });
export const GOOGLE_LOGIN_SUCCESS = (data) => ({
  type: actionConstant.LOGIN_DATA_SUCCESS,
  data: data,
});
export const GOOGLE_LOGIN_ERROR = (data) => ({
  type: actionConstant.GOOGLE_LOGIN_DATA_ERROR,
  data: data,
});

export const REG_INIT = () => ({ type: actionConstant.REGISTER_INIT });
export const REG_SUCCESS = (data) => ({
  type: actionConstant.REGISTER_SUCCESS,
  data: data,
});
export const REG_ERROR = (data) => ({ type: actionConstant.REGISTER_ERROR, data: data });

export const CHANGE_INIT = () => ({ type: actionConstant.CHANGE_PASSWORD_INIT });
export const CHANGE_SUCCESS = (data) => ({
  type: actionConstant.CHANGE_PASSWORD_SUCCESS,
  data: data,
});
export const CHANGE_ERROR = (data) => ({ type: actionConstant.CHANGE_PASSWORD_ERROR, data: data });

export const FORGOT_INIT = () => ({ type: actionConstant.FORGOT_PASSWORD_INIT });
export const FORGOT_SUCCESS = (data) => ({
  type: actionConstant.FORGOT_PASSWORD_SUCCESS,
  data: data,
});
export const FORGOT_ERROR = (data) => ({ type: actionConstant.FORGOT_PASSWORD_ERROR, data: data });

export const CONTACT_INIT = () => ({ type: actionConstant.CONTACT_US_INIT });
export const CONTACT_SUCCESS = (data) => ({
  type: actionConstant.CONTACT_US_SUCCESS,
  data: data,
});
export const CONTACT_ERROR = (data) => ({ type: actionConstant.CONTACT_US_ERROR, data: data });

export const FEEDBACK_INIT = () => ({ type: actionConstant.FEEDBACK_DATA_INIT });
export const FEEDBACK_SUCCESS = (data) => ({
  type: actionConstant.FEEDBACK_DATA_SUCCESS,
  data: data,
});
export const FEEDBACK_ERROR = (data) => ({ type: actionConstant.FEEDBACK_DATA_ERROR, data: data });

export const TEAM_INIT = () => ({ type: actionConstant.TEAM_DATA_INIT });
export const TEAM_SUCCESS = (data) => ({
  type: actionConstant.TEAM_DATA_SUCCESS,
  data: data,
});
export const TEAM_ERROR = (data) => ({ type: actionConstant.TEAM_DATA_ERROR, data: data });

export const NOTICE_INIT = () => ({ type: actionConstant.NOTICES_DATA_INIT });
export const NOTICE_SUCCESS = (data) => ({
  type: actionConstant.NOTICES_DATA_SUCCESS,
  data: data,
});
export const NOTICE_ERROR = (data) => ({ type: actionConstant.NOTICES_DATA_ERROR, data: data });

export const MAGAZINE_INIT = () => ({ type: actionConstant.MAGAZINE_DATA_INIT });
export const MAGAZINE_SUCCESS = (data) => ({
  type: actionConstant.MAGAZINE_DATA_SUCCESS,
  data: data,
});
export const MAGAZINE_ERROR = (data) => ({ type: actionConstant.MAGAZINE_DATA_ERROR, data: data });

export const MY_MAGAZINE_INIT = () => ({ type: actionConstant.MY_MAGAZINE_DATA_INIT });
export const MY_MAGAZINE_SUCCESS = (data) => ({
  type: actionConstant.MY_MAGAZINE_DATA_SUCCESS,
  data: data,
});
export const MY_MAGAZINE_ERROR = (data) => ({
  type: actionConstant.MY_MAGAZINE_DATA_ERROR,
  data: data,
});
