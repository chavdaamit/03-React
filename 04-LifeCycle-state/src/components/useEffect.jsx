import { useEffect, useState } from "react";

const Mounting = () => {
  const [count, setcount] = useState(0);

  const [input, setinput] = useState("");

  const handelChange = () => {
    setcount(count + 1);
  };

  // mouting
  useEffect(() => {
    console.log("component mounting");
  });

  //   Empty Dependency
  // useEffect(() => {
  //   console.log("component mounting");
  // }, []);

  //   Dependency
  // useEffect(() => {
  //   console.log("Count changed");
  // }, [count]);

  return (
    <>
      <h1>{count}</h1>

      <button onClick={handelChange}>increse</button>
      <br />
      <br />
      <br />
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setinput(e.target.value);
        }}
      />
    </>
  );
};

export default Mounting;
