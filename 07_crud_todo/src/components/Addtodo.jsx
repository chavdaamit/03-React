import { useState } from "react";

const Addtodo = ({ handelAdd }) => {
  const [input, setinput] = useState({
    task: "",
    description: "",
  });

  const handelchange = (field, e) => {
    setinput((prev) => {
      return {
        ...prev,
        [field]: e.target.value,
      };
    });
  };

  console.log(input);

  const handelSubmit = (e) => {
    e.preventDefault();

    handelAdd(input);

    setinput({ task: "", description: "" });
  };

  return (
    <>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          placeholder="Enter task"
          value={input.task}
          onChange={(e) => handelchange("task", e)}
        />
        <br />
        <br />

        <input
          type="text"
          placeholder="Enter Description"
          value={input.description}
          onChange={(e) => handelchange("description", e)}
        />
        <br />
        <br />
        <button type="submit">Add Todo</button>
      </form>
    </>
  );
};

export default Addtodo;
