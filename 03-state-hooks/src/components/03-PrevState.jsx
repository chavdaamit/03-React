import React, { useState } from "react";

const PrevState = () => {
  const [counter, setcounter] = useState(0);

  const handleClick = () => {
    setcounter((prev) => prev + 1);
  };

  return (
    <>
      <h1>count{counter}</h1>
      <button onClick={handleClick}>+1</button>

      <br />
      <br />
      <br />

      <button
        onClick={() => {
          (handleClick(),
            handleClick(),
            handleClick(),
            handleClick(),
            handleClick());
        }}
      >
        +5
      </button>
      <br /><br />
    </>
  );
};

export default PrevState;
