import { useState } from "react";

const Conditional = () => {
  const [users, setusers] = useState(false);
  const [login, setlogin] = useState(false);

  const handelchange = () => {
    setusers(!users);
    setlogin(!login);
  };

  return (
    <>
      <h1>{!users ? "click to login" : "Welcome users"}</h1>

      <button onClick={handelchange}>{login ? "logout" : "login"}</button>
      <br />
      <br />
      {users && "welcome"}
    </>
  );
};

export default Conditional;
