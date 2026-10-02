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

  const [Editval, setEditval] = useState(null);

  const handeladd = (input) => {
    if (!input.task || !input.description) {
      alert("task data required");
      return;
    } else if (Editval) {
      setTodos((todos) =>
        todos.map((t) =>
          t.id === Editval.id
            ? { ...t, task: input.task, description: input.description }
            : t,
        ),
      );
      setEditval(null);
    } else {
      const newTodo = {
        id: todos.length + 1,
        task: input.task,
        description: input.description,
        completed: false,
      };
      setTodos((prev) => [...prev, newTodo]);
    }
  };

  const handelDelete = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const handeledit = (id) => {
    const todo = todos.find((t) => t.id == id);
    setEditval(todo);
  };

  return (
    <>
      <Practice handeladd={handeladd} Editval={Editval} />
      <ListTodo
        todos={todos}
        handelDelete={handelDelete}
        handeledit={handeledit}
      />
    </>
  );
};

export default App;
