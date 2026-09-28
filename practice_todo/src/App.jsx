import React, { useState } from "react";
import Practice from "./components/practiceTodo";
import ListTodo from "./components/ListTodo";

const App = () => {
  const intilizeTodo = [
    {
      id: 1,
      task: "learn react",
      description: "you have to learn react",
    },
    {
      id: 2,
      task: "learn nodejs",
      description: "you have to learn nodejs",
    },
  ];

  const [todos, setTodos] = useState(intilizeTodo);

  const handeladd = (input) => {
    const newTodo = {
      id: new Date().getDate(),
      ...input,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  return (
    <>
      <Practice handeladd={handeladd} />
      <ListTodo todos={todos} />
    </>
  );
};

export default App;
