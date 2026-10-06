import { Container, Table } from "react-bootstrap";

import { getAllEmployee } from "../api/studentFetch";
import { useEffect, useState } from "react";

const Employee = () => {
  const [employee, setemployee] = useState([]);

  const [Loading, setLoading] = useState(false);

  const [error, seterror] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const data = await getAllEmployee();
      setemployee(data);
    } catch (error) {
      seterror(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (Loading) {
    return (
      <div className="container mt-5 text-center">
        <h3>Loading...</h3>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5 text-center">
        <h3 className="text-danger">Something went wrong</h3>
        <p>{error}</p>

        <button className="btn btn-primary" onClick={loadData}>
          Try Again
        </button>
      </div>
    );
  }

  return (
    <>
      <Container className="mt-4">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Name</th>
              <th>Emp_Id</th>
              <th>Email</th>
              <th>Designation</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Status</th>
              <th>Mobile</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((emp, index) => {
              return (
                <tr key={emp._id}>
                  <td>{index + 1}</td>

                  <td> {emp.name}</td>
                  <td>{emp.emp_Id}</td>
                  <td>{emp.email}</td>
                  <td>{emp.designation}</td>
                  <td>{emp.department}</td>
                  <td>{emp.salary}</td>
                  <td>{emp.status}</td>
                  <td>{emp.mobile}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Employee;
