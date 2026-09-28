import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";

const Login = () => {
  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();

    dispatch(login());
  };

  return (
    <form onSubmit={loginHandler} className="login-form">
      <h2>EMAIL</h2>

      <input type="email" />

      <h2>PASSWORD</h2>

      <input type="password" />

      <button type="submit">
        Login
      </button>
    </form>
  );
};

export default Login;