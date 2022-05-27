import React, { useState } from "react";
import "./styles.css";

const Counter = (props) => {
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
      <div className="Button">
        <button className="btn-1" onClick={increment}>
          Increment
        </button>
        <button className="btn-2" onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
