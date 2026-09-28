import Table from "react-bootstrap/Table";

const ListTodo = ({ todos, handelDelete, handelEdit }) => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Task</th>
            <th>Description</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>

        <tbody>
          {todos.map((t) => {
            return (
              <tr key={t.id}>
                <td>{t.id}</td>
                <td>{t.task}</td>
                <td>{t.description}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handelDelete(t.id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handelEdit(t.id)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default ListTodo;
