import * as actionConstant from '../../Actions/ActionConstant/ActionConstant';

const initialState = {
  reLoginData: {},
  reRegisterData: {},
  reForgotData: [],
  isLoading: false,
  error: null,
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionConstant.LOGIN_DATA_INIT:
      return {
        ...state,
        isLoading: true,
      };
    case actionConstant.LOGIN_DATA_SUCCESS:
      return {
        ...state,
        reLoginData: action.data ? action.data : null,
        isLoading: false,
      };
    case actionConstant.LOGIN_DATA_ERROR:
      return {
        ...state,
        error: action.data ? action.data.message : null,
        isLoading: false,
      };

    case actionConstant.REGISTER_INIT:
      return {
        ...state,
        isLoading: true,
      };
    case actionConstant.REGISTER_SUCCESS:
      return {
        ...state,
        reRegisterData: action.data ? action.data : null,
        isLoading: false,
      };
    case actionConstant.REGISTER_ERROR:
      return {
        ...state,
        error: action.data ? action.data.message : null,
        isLoading: false,
      };

    case actionConstant.FORGOT_PASSWORD_INIT:
      return {
        ...state,
        isLoading: true,
      };
    case actionConstant.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        reForgotData: action.data ? action.data : null,
        isLoading: false,
      };
    case actionConstant.FORGOT_PASSWORD_ERROR:
      return {
        ...state,
        error: action.data ? action.data.message : null,
        isLoading: false,
      };
    default:
  }
  return state;
};
