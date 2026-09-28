import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";

const Header = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header className="header">
      <h1>Redux Auth</h1>

      <nav>
        <a href="#">My Products</a>
        <a href="#">My Sales</a>

        <button onClick={logoutHandler}>
          Logout
        </button>
      </nav>
    </header>
  );
};

export default Header;