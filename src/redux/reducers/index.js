import { combineReducers } from "redux";
import loginReducer from "./auth/loginReducer";
import registrationReducer from "./auth/registrationReducer";
import activationReducer from "./auth/activationReducer";

// import registerReducer from "./registerReducer";
// import otpReducer from "./otpReducer";
// import forgotPasswordReducer from "./forgotPasswordReducer";
// import resetPasswordReducer from "./resetPasswordReducer";
// import confirmEmailReducer from "./confirmEmailReducer";
// import resendOtpReducer from "./resendOtpReducer";

const rootReducer = combineReducers({
  loginReducer,
  registrationReducer,
  activationReducer,
  //   registerReducer,
  //   otpReducer,
  //   forgotPasswordReducer,
  //   resetPasswordReducer,
  //   confirmEmailReducer,
  //   resendOtpReducer,
});
export default rootReducer;
