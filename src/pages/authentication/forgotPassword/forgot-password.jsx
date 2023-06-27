import Form from "../../../components/form/Form";

const ForgotPassword = () => {
  const handleForgotPassword = (formData) => {
    // Handle forgot password logic
    console.log(formData); // Replace with your forgot password logic
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
  ];

  return (
    <Form
      title="Forgot Password"
      buttonText="Reset Password"
      fields={fields}
      onSubmit={handleForgotPassword}
    />
  );
};

export default ForgotPassword;
