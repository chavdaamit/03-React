import { useState } from "react";

const Multiplication = () => {
  const [couter, setcounter] = useState(2);

  return (
    <>
      <h1>{couter}</h1>
      <button onClick={() => setcounter(couter * 2)}>Multiplication</button>
    </>
  );
};

export default Multiplication;
