import * as actionConstant from '../../Actions/ActionConstant/ActionConstant';

const initialState = {
  reContactUsData: [],
  reFeedbackData: [],
  isLoading: false,
  error: null,
};

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionConstant.CONTACT_US_INIT:
      return {
        ...state,
        isLoading: true,
      };
    case actionConstant.CONTACT_US_SUCCESS:
      return {
        ...state,
        reContactUsData: action.data ? action.data : null,
        isLoading: false,
      };
    case actionConstant.CONTACT_US_ERROR:
      return {
        ...state,
        error: action.data ? action.data.message : null,
        isLoading: false,
      };

    case actionConstant.FEEDBACK_DATA_INIT:
      return {
        ...state,
        isLoading: true,
      };
    case actionConstant.FEEDBACK_DATA_SUCCESS:
      return {
        ...state,
        reFeedbackData: action.data ? action.data : null,
        isLoading: false,
      };
    case actionConstant.FEEDBACK_DATA_ERROR:
      return {
        ...state,
        error: action.data ? action.data.message : null,
        isLoading: false,
      };
    default:
  }
  return state;
};
