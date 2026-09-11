import { useEffect, useState } from "react";

const Fetch = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function fetchuser() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");

      const data = await res.json();

      console.log(data);
      
      setUser(data);
    }

    fetchuser();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>address</th>
          </tr>
        </thead>

        <tbody>
          {user.map((u) => {
            return (
              <tr>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.address["city"]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Fetch;
