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

  const [editVal, setEditVal] = useState(null);

  const handelAdd = (input) => {
    if (!input.task || !input.description) {
      alert("task data required");
      return;
    } else if (editVal) {
      settodos((todo) =>
        todo.map((t) =>
          t.id === editVal.id
            ? { task: input.task, description: input.description }
            : t,
        ),
      );
      setEditVal(null);
    } else {
      const newTodo = {
        id: todos.length + 1,
        task: input.task,
        description: input.description,
      };

      settodos((prev) => [...prev, newTodo]);
    }
  };

  const handelDelete = (id) => {
    settodos(todos.filter((t) => t.id !== id));
  };

  const handelEdit = (id) => {
    const todo = todos.find((t) => t.id === id);

    setEditVal(todo);
  };

  return (
    <>
      <Addtodo handelAdd={handelAdd} editVal={editVal} />
      <br />
      <br />
      <ListTodo
        todos={todos}
        handelDelete={handelDelete}
        handelEdit={handelEdit}
      />

    </>
  );
};

export default App;
