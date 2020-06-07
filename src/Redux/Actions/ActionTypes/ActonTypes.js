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

export const TEAM_INIT = () => ({ type: actionConstant.TEAM_DATA_INIT });
export const TEAM_SUCCESS = (data) => ({
  type: actionConstant.TEAM_DATA_SUCCESS,
  data: data,
});
export const TEAM_ERROR = (data) => ({ type: actionConstant.TEAM_DATA_ERROR, data: data });

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

export const VIEW_MAGAZINE_INIT = () => ({ type: actionConstant.VIEW_MAGAZINE_DATA_INIT });
export const VIEW_MAGAZINE_SUCCESS = (data) => ({
  type: actionConstant.VIEW_MAGAZINE_DATA_SUCCESS,
  data: data,
});
export const VIEW_MAGAZINE_ERROR = (data) => ({
  type: actionConstant.VIEW_MAGAZINE_DATA_ERROR,
  data: data,
});

export const BUY_INIT = () => ({ type: actionConstant.BUY_MAGAZINE_INIT });
export const BUY_SUCCESS = (data) => ({
  type: actionConstant.BUY_MAGAZINE_SUCCESS,
  data: data,
});
export const BUY_ERROR = (data) => ({ type: actionConstant.BUY_MAGAZINE_ERROR, data: data });
