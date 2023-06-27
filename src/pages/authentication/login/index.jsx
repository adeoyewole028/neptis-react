import Form from "../../../components/form/Form";

const Login = () => {
  const handleSignIn = (formData) => {
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
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "*******",
      autoComplete: "current-password",
      required: true,
      signInOnly: true,
    },
  ];

  return (
    <Form
      title="Welcome Back"
      buttonText="Login"
      fields={fields}
      onSubmit={handleSignIn}
      showGoogleButton={false}
      linkSubText="Don’t have an account?"
      linkText="Sign Up"
      linkURL="/register"
      passwordText="Forgot password?"
      passwordURL="/forgot-password"
    />
  );
};

export default Login;
