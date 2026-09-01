import React from "react";
const Jsx = () => {
  let element = React.createElement("h1", null, "without jsx");

  element = <h1>this is with jsx</h1>;

  return <>{element}</>;
};

export default Jsx;
