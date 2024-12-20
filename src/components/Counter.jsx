import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../feature/counter/counterSlice";
function Counter() {
  const style = "";
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Counter</h2>
      <button
        style={{ fontWeight: "bold", padding: "10px 30px" }}
        onClick={() => {
          dispatch(decrement());
        }}
      >
        <b>-</b>
      </button>
      <h2 style={{ display: "inline-block", padding: " 0px 20px" }}>{count}</h2>

      <button
        style={{ fontWeight: "bold", padding: "10px 30px", margin: "10px" }}
        onClick={() => {
          dispatch(increment());
        }}
      >
        <b>+</b>
      </button>
      <br />
      <button
        style={{ fontWeight: "bold", padding: "10px 10px", margin: "10px" }}
        onClick={() => {
          dispatch(incrementByAmount(2));
        }}
      >
        IncrementBy:2
      </button>
    </div>
  );
}

export default Counter;
