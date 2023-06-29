import {
  ACTIVATION_REQUEST,
  ACTIVATION_SUCCESS,
  ACTIVATION_FAILURE,
} from "../../actionTypes/auth/activationActionTypes";
import api from "../../../services/api";
import { appUrls } from "../../../services/urls";

const { activationUrl } = appUrls;

export const activationRequest = () => ({
  type: ACTIVATION_REQUEST,
});
// activation action
export const activationSuccess = () => ({
  type: ACTIVATION_SUCCESS,
});

export const activationFailure = (error) => ({
  type: ACTIVATION_FAILURE,
  error,
});

export const activateUser = (uid, token, navigate) => async (dispatch) => {
  dispatch(activationRequest());

  try {
    const response = await api.post(activationUrl, { uid, token });
    console.log(response);
    dispatch(activationSuccess());
    navigate("/confirm-email-success");
  } catch (error) {
    dispatch(activationFailure(error));
  }
};
