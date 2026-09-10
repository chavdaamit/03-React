import { useState } from "react";

const ObjectState = () => {
  const [user, setuser] = useState({ email: "", password: "" });

  const handleChange = (field, e) => {
    setuser((prev) => {
      return {
        ...prev,
        [field]: e.target.value,
      };
    });
  };

  return (
    <>
      <h1>Email:-{user.email}</h1>
      <input
        type="email"
        value={user.email}
        onChange={(e) => handleChange("email", e)}
      />

      <h1>password:-{user.password}</h1>
      <input
        type="password"
        value={user.password}
        onChange={(e) => handleChange("password", e)}
      />
    </>
  );
};

export default ObjectState;
