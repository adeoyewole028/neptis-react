import { useState, useEffect } from "react";
import FormattedInput from "../../../components/form/FormattedInput";
import { useNavigate } from "react-router-dom";
import { activateUser } from "../../../redux/actions/auth/activationAction";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const ConfirmEmail = () => {
  const [formData, setFormData] = useState({ uid: "", token: "" });
  const [count, setCount] = useState(0); // Initialize count with 0
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const uidFromLocation = location.state && location.state.uid;

  useEffect(() => {
    if (uidFromLocation) {
      setFormData((prevData) => ({
        ...prevData,
        uid: uidFromLocation,
      }));
    }
  }, [uidFromLocation]);

  const handleChange = (name, value) => {
    console.log(name, value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (formData) => {
    console.log(formData);
    const { uid, token } = formData;
    dispatch(activateUser(uid, token, navigate));
  };

  const resendCode = () => {
    console.log("resend code");
    setCount(120); // Start the countdown by setting count to 120
  };

  const tick = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : prevCount));
  };

  useEffect(() => {
    // Start the timer only if count is greater than 0
    if (count > 0) {
      const timerId = setInterval(() => tick(), 1000);
      return () => clearInterval(timerId);
    }
  }, [count]); // Add count as a dependency to useEffect

  // format count to minutes and seconds
  const minutes = Math.floor(count / 60);
  const seconds = count % 60;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <FormattedInput
        formData={formData}
        title="Confirm your email"
        type="text"
        name="confirmEmail"
        placeholder="000 - 000"
        buttonText="Resend code"
        onSubmit={handleSubmit}
        onChange={handleChange}
        label="We sent an activation code to your email"
        email="MkJohn@gmail.com"
        count={count}
        timeLeft={`${formattedMinutes}:${formattedSeconds}`}
        resendCode={resendCode}
      />
    </div>
  );
};

export default ConfirmEmail;
