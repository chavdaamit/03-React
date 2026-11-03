import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Add from "./components/Add";
import List from "./components/List";

const App = () => {
  return (
    <>
      <Add />
      <List />
    </>
  );
};

export default App;
