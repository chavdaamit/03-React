import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllEmployee, DeleteEmployee } from "../api/studentaxios";
import Loading from "../ui/Loading";
import Error from "../ui/Error";

function Employee() {
  const [employee, setEmployee] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const loadData = async () => {
    try {
      setLoading(true);
      const data = await getAllEmployee();
      setEmployee(data || []);
      setError("");
    } catch (err) {
      setError("Employees load failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await DeleteEmployee(id);
      loadData();
    } catch (err) {
      setError("Employee delete failed");
    }
  };

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <section className="container mt-4">
      <div className="table-responsive shadow rounded">
        <table className="table table-striped table-hover table-bordered align-middle mb-0">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Employee ID</th>
              <th>Email</th>
              <th>Designation</th>
              <th>Department</th>
              <th>Salary</th>

              <th>Mobile</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {employee.map((emp) => (
              <tr key={emp._id}>
                <td>{emp.name}</td>
                <td>{emp.emp_Id}</td>
                <td>{emp.email}</td>
                <td>{emp.designation}</td>
                <td>{emp.department}</td>
                <td>{emp.salary}</td>

                <td>{emp.mobile}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => navigate(`/update/${emp._id}`)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(emp._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {employee.length === 0 && (
              <tr>
                <td colSpan="9" className="text-center py-4">
                  No employees found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Employee;
