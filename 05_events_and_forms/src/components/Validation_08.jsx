import { useState } from "react";

const Validation = () => {
  const [input, setinput] = useState({ name: "", email: "", password: "" });

  const [users, setusers] = useState([]);

  const [error, seterror] = useState([]);

  const Validation01 = () => {
    const newErrors = {};

    if (input.name === "") {
      newErrors.name = "name is required";
    }

    if (input.email === "") {
      newErrors.email = "email is required";
    }

    if (input.password === "") {
      newErrors.password = "password is required";
    }

    if (!input.email.includes("@")) {
      newErrors.email = "invalid email";
    }

    if (!input.password) {
      newErrors.password = "password is required";
    }

    if (input.password.length < 6) {
      newErrors.password = "password must be atleast 6 character long";
    }
    return newErrors;
  };

  const handelChange = (field, e) => {
    setinput((prev) => {
      return {
        ...prev,
        [field]: e.target.value,
      };
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    const validate = Validation01();

    if (Object.keys(validate).length > 0) {
      seterror(validate);
    } else {
      setusers((prev) => [...prev, input]);
      alert("user data saved");
    }
  };

  console.log("users list", users);

  return (
    <>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          placeholder="Enter your name "
          value={input.name}
          onChange={(e) => handelChange("name", e)}
        />

        {error.name ? <p style={{ color: "green" }}>{error.name}</p> : null}
        <br />
        <br />

        <input
          type="email"
          placeholder="enter your email"
          value={input.email}
          onChange={(e) => handelChange("email", e)}
        />

        {error.email ? <p style={{ color: "red" }}>{error.email}</p> : null}
        <br />
        <br />

        <input
          type="password"
          placeholder="Enter your password"
          value={input.password}
          onChange={(e) => handelChange("password", e)}
        />

        {error.password ? (
          <p style={{ color: "pink" }}>{error.password}</p>
        ) : null}
        <br />
        <br />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default Validation;
