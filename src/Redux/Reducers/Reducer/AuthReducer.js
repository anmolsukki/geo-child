import * as actionConstant from '../../Actions/ActionConstant/ActionConstant';

const initialState = {
  reUserData: {},
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
        reUserData: action.data ? action.data : null,
        isLoading: false,
      };
    case actionConstant.LOGIN_DATA_ERROR:
      return {
        ...state,
        error: action.data ? action.data.message : null,
        isLoading: false,
      };
    default:
  }
  return state;
};
