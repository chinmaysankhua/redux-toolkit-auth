import { useDispatch, useSelector } from "react-redux";

import {
  increment,
  decrement,
  increaseBy10,
  toggleCounter,
} from "../store/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector(
    (state) => state.counter.value
  );

  return (
    <div className="counter">
      <h2>REDUX COUNTER</h2>

      <h1>{counter}</h1>

      <button onClick={() => dispatch(increment())}>
        Increment
      </button>

      <button onClick={() => dispatch(increaseBy10())}>
        Increase by 10
      </button>

      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>

      <button onClick={() => dispatch(toggleCounter())}>
        Toggle Counter
      </button>
    </div>
  );
};

export default Counter;