import { useState } from "react";

const State = () => {
  const [counter, setcounter] = useState(0);

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => setcounter(counter + 1)}>increse</button>
      
    </>
  );
};

export default State;
