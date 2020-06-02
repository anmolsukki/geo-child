import * as actionConstant from '../../Actions/ActionConstant/ActionConstant';

const initialState = {
  reBuyMagazineData: [],
  isLoading: false,
  error: null,
};

export const buyMagazineReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionConstant.BUY_MAGAZINE_INIT:
      return {
        ...state,
        isLoading: true,
      };
    case actionConstant.BUY_MAGAZINE_SUCCESS:
      return {
        ...state,
        reBuyMagazineData: action.data ? action.data : null,
        isLoading: false,
      };
    case actionConstant.BUY_MAGAZINE_ERROR:
      return {
        ...state,
        error: action.data ? action.data.message : null,
        isLoading: false,
      };
    default:
  }
  return state;
};
