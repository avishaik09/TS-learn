import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  StateType,
  incrementByValue,
  decrementByValue,
  increment,
  decrement,
} from "../redux";

function ReduxToolkit() {
  const [val, setVal] = useState<number>(0);
  const dispatch = useDispatch();
  const count = useSelector((state: StateType) => state.count);
  const incrementHandler = () => {
    dispatch(increment());
  };
//   const decrementHandler = () => {
//     dispatch(decrement());
//   };

  const incrementByValueHandler = () => {
    setVal(0)
    dispatch(incrementByValue(val));
  };
  const decrementByValueHandler = () => {
    setVal(0)
    dispatch(decrementByValue(val));
  };
  return (
    <div>
      <h1>toolkit</h1>
      <h2>{count} </h2>
      <input
        type="number"
        value={val}
        onChange={(e) => setVal(Number(e.target.value))}
      />
      <button onClick={incrementHandler}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button disabled={val < 0} onClick={incrementByValueHandler}>
        add by {val}{" "}
      </button>
      <button disabled={val < 0} onClick={decrementByValueHandler}>
        subtract by {val}
      </button>
    </div>
  );
}

export default ReduxToolkit;
