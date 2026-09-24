import Table from "react-bootstrap/Table";

const ListTodo = ({ todos }) => {
  return (
    <>
      <h1>Todo List</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Task</th>
            <th>Description</th>
          </tr>
        </thead>

        <tbody>
          {todos.map((t) => {
            return (
              <tr key={t.id}>
                <td>{t.id}</td>
                <td>{t.task}</td>
                <td>{t.description}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default ListTodo;
