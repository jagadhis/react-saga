import React, { useState } from "react";

const container = {
  color: "lightblue",
};
const Counter = () => {
  const [count, setcount] = useState(0);
  const increment = () => {
    setcount(count + 1);
  };

  const decrement = () => {
    setcount(count - 1);
  };

  return (
    <div style={container}>
      <h3>{`count:${count}`}</h3>
      <div className="content">
        <button onClick={increment}> Increment </button>
        <button onClick={decrement}> Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
