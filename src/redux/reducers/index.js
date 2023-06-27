import { combineReducers } from "redux";
import loginReducer from "./auth/loginReducer";
// import registerReducer from "./registerReducer";
// import otpReducer from "./otpReducer";
// import forgotPasswordReducer from "./forgotPasswordReducer";
// import resetPasswordReducer from "./resetPasswordReducer";
// import confirmEmailReducer from "./confirmEmailReducer";
// import resendOtpReducer from "./resendOtpReducer";

const rootReducer = combineReducers({
  loginReducer,
//   registerReducer,
//   otpReducer,
//   forgotPasswordReducer,
//   resetPasswordReducer,
//   confirmEmailReducer,
//   resendOtpReducer,
});
export default rootReducer;
