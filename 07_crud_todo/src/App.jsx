import React, { useState } from "react";
import Addtodo from "./components/Addtodo";
import ListTodo from "./components/ListTodo";

const App = () => {
  const initialTodos = [
    {
      id: 1,
      task: "learn react",
      description: "you have to learn react daily",
    },
    {
      id: 2,
      task: "practice react concept code",
      description: "you have to understand react concept and practice",
    },
  ];

  const [todos, settodos] = useState(initialTodos);

  const handelAdd = (input) => {
    const newTodo = {
      id: todos.length + 1,
      task: input.task,
      description: input.description,
    };

    settodos((prev) => [...prev, newTodo]);
  };

  return (
    <>
      <Addtodo handelAdd={handelAdd} />
      <br />
      <br />
      <ListTodo todos={todos} />
    </>
  );
};

export default App;
