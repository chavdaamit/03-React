import React, { useState } from "react";
import Addtodo from "./components/Addtodo";
import ListTodo from "./components/ListTodo";

const App = () => {
  const initialTodos = [
    {
      id: 1,
      task: "learn react",
      description: "you have to learn react daily",
      completed: "true",
    },
    {
      id: 2,
      task: "practice react concept code",
      description: "you have to understand react concept and practice",
      completed: false,
    },
  ];

  const [todos, settodos] = useState(initialTodos);

  console.log(todos);

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
        completed: false,
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

  const handelToggel = (id) => {
    settodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  const totaltask = todos.length;

  const completedTask = todos.filter((todo) => todo.completed);

  const pendingTask = todos.filter((todo) => !todo.completed);

  return (
    <>
      <div className="d-flex justify-content-center ">
        <div className="dashbord">
          <h3>TotalTask : {totaltask} </h3>
        </div>
        <div className="dashbord">
          <h3>CompletedTask : {completedTask.length}</h3>
        </div>
        <div className="dashbord">
          <h3>PendingTask : {pendingTask.length}</h3>
        </div>
      </div>

      <Addtodo handelAdd={handelAdd} editVal={editVal} />
      <br />
      <br />
      <ListTodo
        todos={todos}
        handelDelete={handelDelete}
        handelEdit={handelEdit}
        handelToggel={handelToggel}
      />
    </>
  );
};

export default App;
