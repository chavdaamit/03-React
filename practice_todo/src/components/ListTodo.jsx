const ListTodo = ({ todos, handelDelete, handeledit }) => {
  return (
    <>
      <table border={2}>
        <thead>
          <tr>
            <th>sr</th>
            <th>task</th>
            <th>description</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((t, index) => {
            return (
              <tr key={t.id}>
                <td>{index + 1}</td>
                <td>{t.task}</td>
                <td>{t.description}</td>
                <td>
                  <button onClick={() => handelDelete(t.id)}>Delete</button>
                </td>
                <td>
                  <button onClick={() => handeledit(t.id)}>Edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ListTodo;
