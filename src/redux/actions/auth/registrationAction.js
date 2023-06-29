import {
  REGISTER_REQUEST,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
} from "../../actionTypes/auth/registrationActionTypes";
import api from "../../../services/api";
import { appUrls } from "../../../services/urls";

const { signupUrl } = appUrls;

export const registerRequest = () => ({
  type: REGISTER_REQUEST,
});

export const registerSuccess = () => ({
  type: REGISTER_SUCCESS,
});

export const registerFailure = (error) => ({
  type: REGISTER_FAILURE,
  error,
});

export const registerUser = (formData, navigate) => async (dispatch) => {
  dispatch(registerRequest());

  try {
    const response = await api.post(signupUrl, formData);
    dispatch(registerSuccess());
    const { uid } = response.data; // Get the uid from the registration response
    navigate("/confirm-email", { state: { uid } }); // Pass the uid as location state to the confirm email page
  } catch (error) {
    dispatch(registerFailure(error));
  }
};
