import { useRef } from "react";

const Uncontrolled_Components = () => {
  const inputref = useRef("");

  const handelsubmit = (e) => {
    e.preventDefault();
    console.log("input", inputref.current.value);
  };

  return (
    <>
      <form onSubmit={handelsubmit}>
        <input type="text" placeholder="enter some text" ref={inputref} />
        <br />
        <br />
        <button type="submit">add</button>
      </form>
    </>
  );
};

export default Uncontrolled_Components;
