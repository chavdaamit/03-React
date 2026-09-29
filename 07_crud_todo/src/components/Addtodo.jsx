import "./style.css";

import { useEffect, useState } from "react";

const Addtodo = ({ handelAdd, editVal }) => {
  const [input, setinput] = useState({
    task: "",
    description: "",
  });

  useEffect(() => {
    editVal ? setinput(editVal) : null;
  }, [editVal]);

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
     

      <div className="container add mt-5">
        <h1 className="text-center todolist">Todo List</h1>
        <div className="  d-flex justify-content-center">
          <form onSubmit={handelSubmit} className="w-50">
            <input
              type="text"
              placeholder="Enter task"
              value={input.task}
              onChange={(e) => handelchange("task", e)}
              className="form-control mb-3"
            />

            <input
              type="text"
              placeholder="Enter Description"
              value={input.description}
              onChange={(e) => handelchange("description", e)}
              className="form-control mb-3"
            />

            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-success">
                {editVal ? "Update" : "Add"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Addtodo;
