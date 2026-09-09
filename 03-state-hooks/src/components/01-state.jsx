import { useState } from "react";

const State = () => {
  const [counter, setcounter] = useState(0);

  // const User = () => {
  //   setcounter(counter + 1);
  // };

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => setcounter(counter + 1)}>increse</button>
      {/* <button onClick={User} >hbhfvhb</button> */}
    </>
  );
};

export default State;
