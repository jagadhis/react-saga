import React, { useState } from "react";
import "./styles.css";

const Counter = () => {
  const [count, setcount] = useState(0);
  const increment = () => {
    setcount(count + 1);
  };

  const decrement = () => {
    setcount(count - 1);
  };

  return (
    <div className="Container">
      <h3>{`count:${count}`}</h3>
      <div>
        <button onClick={increment}> Increment </button>
        <button onClick={decrement}> Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
