import React, { useState } from "react";

const PrevState_04 = () => {
  const [counter, setcounter] = useState("");

  const [users, setUsers] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();

    setUsers((prev) => [...prev, counter]);
  };

  return (
    <>
      <form onSubmit={handleClick}>
        <input
          type="text"
          value={counter}
          onChange={(e) => setcounter(e.target.value)}
        />
        <button type="submit">Add User</button>
      </form>

      <ul>
        {users.map((u) => {
          return <li>{u}</li>;
        })}
      </ul>
    </>
  );
};

export default PrevState_04;
