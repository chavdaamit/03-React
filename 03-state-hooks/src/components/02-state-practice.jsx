import { useState } from "react";

const Practice = () => {
  const [counter, setcounter] = useState(0);

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => setcounter(counter - 1)}>decrease</button>
    </>
  );
};

export default Practice;
