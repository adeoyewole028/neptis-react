// auth action types

export const AUTH_START = "AUTH_START";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAIL = "AUTH_FAIL";
export const AUTH_LOGOUT = "AUTH_LOGOUT"; // auth actions
const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  authRedirectPath: "/",
  isAuth: false,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case AUTH_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false,
        isAuth: true,
      };
    case AUTH_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
        isAuth: false,
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        token: null,
        userId: null,
        isAuth: false,
      };
    default:
      return state;
  }
}