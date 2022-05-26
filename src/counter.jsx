import React, { useState } from "react";

const Counter = () => {
  const [count, setcount] = useState(0);
  const increment = () => {
    setcount(count + 1);
  };

  const decrement = () => {
    setcount(count - 1);
  };

  return (
    <div style={{ backgroundcolor: "grey" }}>
      <h3>{`count:${count}`}</h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={increment}> Increment </button>
        <button onClick={decrement}> Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
