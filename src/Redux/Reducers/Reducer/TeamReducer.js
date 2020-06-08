import * as actionConstant from '../../Actions/ActionConstant/ActionConstant';

const initialState = {
  reTeamData: [],
  reNoticeData: [],
  isLoading: false,
  error: null,
};

export const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionConstant.TEAM_DATA_INIT:
      return {
        ...state,
        isLoading: true,
      };
    case actionConstant.TEAM_DATA_SUCCESS:
      return {
        ...state,
        reTeamData: action.data ? action.data : null,
        isLoading: false,
      };
    case actionConstant.TEAM_DATA_ERROR:
      return {
        ...state,
        error: action.data ? action.data.message : null,
        isLoading: false,
      };

    case actionConstant.NOTICES_DATA_INIT:
      return {
        ...state,
        isLoading: true,
      };
    case actionConstant.NOTICES_DATA_SUCCESS:
      return {
        ...state,
        reNoticeData: action.data ? action.data : null,
        isLoading: false,
      };
    case actionConstant.NOTICES_DATA_ERROR:
      return {
        ...state,
        error: action.data ? action.data.message : null,
        isLoading: false,
      };
    default:
  }
  return state;
};
