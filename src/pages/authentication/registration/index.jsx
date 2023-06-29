// registration page
import { useState } from "react";
import Form from "../../../components/form/Form";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../redux/actions/auth/registrationAction";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [passwordError, setPasswordError] = useState("");

  const handleRegister = async (formData) => {
    const { password } = formData;

    // Password validation
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters.");
      return;
    }

    if (!/(?=.*[a-z])/.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter.");
      return;
    }

    if (!/(?=.*[A-Z])/.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter.");
      return;
    }

    if (!/(?=.*\d)/.test(password)) {
      setPasswordError("Password must contain at least one number.");
      return;
    }

    // Password is valid
    setPasswordError("");
    console.log(formData);
    try {
      dispatch(registerUser(formData, navigate));
    } catch (error) {
      console.log(error);
    }
  };

  const fields = [
    {
      name: "email",
      type: "email",
      label: "Email address",
      placeholder: "example@gmail.com",
      autoComplete: "email",
      required: true,
    },
    {
      name: "full-name",
      type: "text",
      label: "Full Name",
      placeholder: "John Doe",
      autoComplete: "text",
      required: true,
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "*******",
      autoComplete: "current-password",
      required: true,
      registrationOnly: true,
    },
  ];

  return (
    <Form
      title="Welcome to Neptis"
      buttonText="Sign Up"
      fields={fields}
      onSubmit={handleRegister}
      showGoogleButton={true}
      linkSubText="Already have an account?"
      linkText="Log in"
      linkURL="/login"
      passwordError={passwordError}
    />
  );
};

export default Register;
