import Form from "../../../components/form/Form";

const Register = () => {
  const handleRegister = (formData) => {
    // Handle registration logic
    console.log(formData);
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
    />
  );
};

export default Register;
