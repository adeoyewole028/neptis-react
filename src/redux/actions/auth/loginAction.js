import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../../actionTypes/auth/loginActionTypes";
import api from "../../../services/api";
import { appUrls } from "../../../services/urls";
import TokenService from "../../../services/token.service";

const { loginUrl } = appUrls;

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  error,
});

export const loginUser = (formData, navigate) => async (dispatch) => {
  dispatch(loginRequest());

  try {
    const response = await api.post(loginUrl, formData);
    const { accessToken, refreshToken } = response.data;

    // Save tokens to local storage
    TokenService.setLocalAccessToken(accessToken);
    TokenService.setLocalRefreshToken(refreshToken);

    dispatch(loginSuccess());
    navigate("/dashboard"); // Navigate to the dashboard page or any desired destination
  } catch (error) {
    dispatch(loginFailure(error));
  }
};
