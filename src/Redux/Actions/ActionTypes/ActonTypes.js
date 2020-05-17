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
