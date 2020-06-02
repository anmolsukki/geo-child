import * as actionConstant from '../ActionConstant/ActionConstant';

export const LOGIN_INIT = () => ({ type: actionConstant.LOGIN_DATA_INIT });
export const LOGIN_SUCCESS = (data) => ({
  type: actionConstant.LOGIN_DATA_SUCCESS,
  data: data,
});
export const LOGIN_ERROR = (data) => ({ type: actionConstant.LOGIN_DATA_ERROR, data: data });

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

export const MAGAZINE_INIT = () => ({ type: actionConstant.MAGAZINE_DATA_INIT });
export const MAGAZINE_SUCCESS = (data) => ({
  type: actionConstant.MAGAZINE_DATA_SUCCESS,
  data: data,
});
export const MAGAZINE_ERROR = (data) => ({ type: actionConstant.MAGAZINE_DATA_ERROR, data: data });

export const BUY_INIT = () => ({ type: actionConstant.BUY_MAGAZINE_INIT });
export const BUY_SUCCESS = (data) => ({
  type: actionConstant.BUY_MAGAZINE_SUCCESS,
  data: data,
});
export const BUY_ERROR = (data) => ({ type: actionConstant.BUY_MAGAZINE_ERROR, data: data });
