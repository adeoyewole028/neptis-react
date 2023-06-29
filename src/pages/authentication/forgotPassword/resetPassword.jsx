import Form from "../../../components/form/Form";
import { useState } from "react";

const ResetPassword = () => {
  const [passwordError, setPasswordError] = useState("");

  const handleResetPassword = (formData) => {
    const { password, passwordTwo } = formData;

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

    // Password match validation
    if (password !== passwordTwo) {
      setPasswordError("Passwords do not match.");
      return;
    }

    // Password is valid
    setPasswordError("");
    console.log(formData);
  };

  const fields = [
    {
      name: "password",
      type: "password",
      label: "New password",
      placeholder: "*******",
      autoComplete: "current-password",
      required: true,
    },
    {
      name: "passwordTwo",
      type: "password",
      label: "Confirm new password",
      placeholder: "*******",
      autoComplete: "current-password",
      required: true,
      registrationOnly: true,
    },
  ];

  return (
    <Form
      title="Reset Password?"
      buttonText="Reset Password"
      fields={fields}
      onSubmit={handleResetPassword}
      showGoogleButton={false}
      subtitle="Create a new password for your account"
      passwordError={passwordError}
    />
  );
};

export default ResetPassword;
