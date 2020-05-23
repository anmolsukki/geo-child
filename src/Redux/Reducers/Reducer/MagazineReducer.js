import * as actionConstant from '../../Actions/ActionConstant/ActionConstant';

const initialState = {
  reMagzineData: [],
  isLoading: false,
  error: null,
};

export const MagazineReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionConstant.MAGAZINE_DATA_INIT:
      return {
        ...state,
        isLoading: true,
      };
    case actionConstant.MAGAZINE_DATA_SUCCESS:
      return {
        ...state,
        reMagzineData: action.data ? action.data : null,
        isLoading: false,
      };
    case actionConstant.MAGAZINE_DATA_ERROR:
      return {
        ...state,
        error: action.data ? action.data.message : null,
        isLoading: false,
      };
    default:
  }
  return state;
};
