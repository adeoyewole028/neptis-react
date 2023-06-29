import {
  ACTIVATION_REQUEST,
  ACTIVATION_SUCCESS,
  ACTIVATION_FAILURE,
} from "../../actionTypes/auth/activationActionTypes";

const initialState = {
  loading: false,
  error: null,
};

const activationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVATION_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ACTIVATION_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case ACTIVATION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default activationReducer;
