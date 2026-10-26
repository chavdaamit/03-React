import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  addEmployee,
  getAllEmployee,
  UpdateEmplpyee,
} from "../api/studentaxios";

function AddEmployee() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isUpdate = Boolean(id);

  const [loading, setLoading] = useState(false);

  const [values, setValues] = useState({
    name: "",
    emp_Id: "",
    email: "",
    designation: "",
    department: "",
    salary: "",
    status: "active",
    mobile: "",
  });

  useEffect(() => {
    if (!id) return;

    const fetchEmployee = async () => {
      try {
        setLoading(true);

        const employees = await getAllEmployee();
        const employee = employees.find((emp) => emp._id === id);

        if (!employee) {
          alert("Employee not found");
          navigate("/");
          return;
        }

        setValues({
          name: employee.name ?? "",
          emp_Id: employee.emp_Id ?? "",
          email: employee.email ?? "",
          designation: employee.designation ?? "",
          department: employee.department ?? "",
          salary: employee.salary ?? "",
          status: employee.status ?? "active",
          mobile: employee.mobile ?? "",
        });
      } catch (error) {
        alert(error.response?.data?.message || "Employee details load failed");
      } finally {
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const employeeData = {
        ...values,
        emp_Id: Number(values.emp_Id),
        salary: Number(values.salary),
      };

      if (isUpdate) {
        await UpdateEmplpyee(id, employeeData);
        alert("Employee updated successfully!");
      } else {
        await addEmployee(employeeData);
        alert("Employee added successfully!");
      }

      navigate("/");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          error.message ||
          "Something went wrong",
      );
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" />
        <p>Loading employee...</p>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="card shadow border-0">
            <div className="card-header bg-primary text-white py-3">
              <h3 className="mb-0 text-center">Add Employee</h3>
            </div>

            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter employee name"
                      value={values.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Employee ID</label>
                    <input
                      type="number"
                      name="emp_Id"
                      className="form-control"
                      placeholder="Enter employee ID"
                      value={values.emp_Id}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter email"
                      value={values.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Mobile</label>
                    <input
                      type="text"
                      name="mobile"
                      className="form-control"
                      placeholder="Enter mobile number"
                      value={values.mobile}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Designation</label>
                    <input
                      type="text"
                      name="designation"
                      className="form-control"
                      placeholder="Enter designation"
                      value={values.designation}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Department</label>
                    <select
                      name="department"
                      className="form-select"
                      value={values.department}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select department</option>
                      <option value="HR">HR</option>
                      <option value="finance">Finance</option>
                      <option value="it">IT</option>
                      <option value="security">Security</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Salary</label>
                    <input
                      type="number"
                      name="salary"
                      className="form-control"
                      placeholder="Enter salary"
                      value={values.salary}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Status</label>
                    <select
                      name="status"
                      className="form-select"
                      value={values.status}
                      onChange={handleChange}
                      required
                    >
                      <option value="active">Active</option>
                      <option value="terminated">Terminated</option>
                      <option value="suspend">Suspend</option>
                      <option value="hold">Hold</option>
                    </select>
                  </div>
                </div>

                <div className="d-flex gap-2 justify-content-end mt-4">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => navigate("/")}
                  >
                    Cancel
                  </button>

                  <button type="submit" className="btn btn-primary">
                    {isUpdate ? "Update Employee" : "Add Employee"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;
