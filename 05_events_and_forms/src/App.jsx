import { useState } from "react";
import Props from "./components/props";
import Conditional from "./components/Conditional_Rendering";
import Conditional_rendering from "./components/Conditional_Rendering_05";
import Uncontrolled_Components from "./components/Uncontrolled_Components_06";

const App = () => {
  const [input, setInput] = useState("");

  return (
    <>
      {/* <form action="">
        <input
          type="text"
          placeholder="Enter Your Name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>

      <Props name="Amit" />
      <Props name={input} /> */}

      {/* <Conditional /> */}

      {/* <Conditional_rendering /> */}
      <Uncontrolled_Components />
    </>
  );
};

export default App;
