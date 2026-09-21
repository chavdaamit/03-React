import React, { useState } from "react";

const Conditional_rendering = () => {
  const [color, setcolor] = useState("");

  let content;

  if (color === "red") {
    content = <h1 style={{ color: "red" }}>you have selected red color</h1>;
  } else if (color === "yellow") {
    content = (
      <h1 style={{ color: "yellow" }}>you have selected yellow color</h1>
    );
  } else if (color === "green") {
    content = <h1 style={{ color: "green" }}>you have selected Green color</h1>;
  } else if (color === "pink") {
    content = <h1 style={{ color: "pink" }}>you have selected pink color</h1>;
  } else if (color === "grey") {
    content = <h1 style={{ color: "grey" }}>you have selected white color</h1>;
  } else if (color === "maroon") {
    content = (
      <h1 style={{ color: "maroon" }}>you have selected maroon color</h1>
    );
  } else {
    content = <h1>you have selected wrong color</h1>;
  }
  return (
    <>
      <form action="">
        <input
          type="text"
          placeholder="Enter color"
          value={color}
          onChange={(e) => setcolor(e.target.value)}
        />
      </form>
      {content}
    </>
  );
};

export default Conditional_rendering;
