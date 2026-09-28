import { useSelector } from "react-redux";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import Counter from "./components/Counter";
import "./App.css";

const App = () => {
  const isAuthenticated = useSelector(
    (state) => state.auth.isAuthenticated
  );

  return (
    <>
      <Header />

      <main>
        {!isAuthenticated && <Login />}

        {isAuthenticated && <Home />}

        <Counter />
      </main>
    </>
  );
};

export default App;