import { useEffect, useState } from "react";

const Fetch = () => {
  const [user, setUser] = useState([]);

  const [Error, setError] = useState(null);

  useEffect(() => {
    async function fetchuser() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) {
        setError("no data Found");
      }

      const data = await res.json();

      console.log(data);

      setUser(data);
    }

    fetchuser();
  }, []);

  return (
    <>
      {Error != null ? (
        <>
          <h1>{Error}</h1>
        </>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
              </tr>
            </thead>

            <tbody>
              {user.map((u) => {
                return (
                  <tr key={u.id}>
                    <td>{u.id}</td>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default Fetch;
