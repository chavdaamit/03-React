import { useState } from "react";

const Practice = ({ handeladd }) => {
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

  const handelsubmit = (e) => {
    e.preventDefault();

    handeladd(input);
    setinput({ task: "", description: "" });
  };

  return (
    <>
      <form onSubmit={handelsubmit}>
        <input
          type="text"
          placeholder="Enter number"
          value={input.task}
          onChange={(e) => handelchange("task", e)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter description"
          value={input.description}
          onChange={(e) => handelchange("description", e)}
        />
        <br />
        <br />
        <button type="submit">add</button>
      </form>
    </>
  );
};

export default Practice;
