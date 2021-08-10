import React, { useState } from "react";

const Test = () => {
  const [state, setstate] = useState({ count: 0, color: "red" });

  const count = state.count;

  const inc = () => {
    setstate((prev) => {
      return { ...prev, count: prev.count + 1, color: "blue" };
    });
  };
  const dec = () => {
    setstate((prev) => {
      return { ...prev, count: prev.count - 1, color: "purple" };
    });
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={inc}>Incremenet</button>
      <span>{count}</span>
      <span>{state.color}</span>
      <button onClick={dec}>Decrement</button>
    </div>
  );
};

export default Test;
