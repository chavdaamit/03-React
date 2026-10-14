
import { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import {
  getAllEmployee,
  DeleteEmployee,
} from "../api/studentaxios";

import Loading from "../ui/Loading";

const Employee = () => {
  const [employee, setEmployee] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await getAllEmployee();
      setEmployee(data);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await DeleteEmployee(id);
      await loadData();
    } catch (err) {
      setError(err.message || "Delete failed");
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <Container className="mt-5 text-center">
        <h3 className="text-danger">Something went wrong</h3>
        <p>{error}</p>

        <Button variant="primary" onClick={loadData}>
          Try Again
        </Button>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Table striped bordered hover variant="dark" responsive>
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
            <th colSpan={2}>Action</th>
          </tr>
        </thead>

        <tbody>
          {employee.length > 0 ? (
            employee.map((emp, index) => (
              <tr key={emp._id}>
                <td>{index + 1}</td>
                <td>{emp.name}</td>
                <td>{emp.emp_Id}</td>
                <td>{emp.email}</td>
                <td>{emp.designation}</td>
                <td>{emp.department}</td>
                <td>{emp.salary}</td>
                <td>{emp.status}</td>
                <td>{emp.mobile}</td>

                <td>
                  <Button
                    variant="warning"
                    onClick={() => navigate(`/update/${emp._id}`)}
                  >
                    Edit
                  </Button>
                </td>

                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(emp._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={11} className="text-center">
                No employees found
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default Employee;
