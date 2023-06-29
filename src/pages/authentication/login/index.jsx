import Form from "../../../components/form/Form";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../redux/actions/auth/loginAction";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignIn = (formData) => {
    // console.log(formData);
    dispatch(loginUser(formData, navigate));
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
