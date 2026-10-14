import { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import * as formik from "formik";
import { useNavigate, useParams } from "react-router-dom";

import {
  addEmployee,
  getAllEmployee,
  UpdateEmplpyee,
} from "../api/studentaxios";

import Validationschema from "../validation/validation";

function AddEmployee() {
  const { Formik } = formik;
  const navigate = useNavigate();
  const { id } = useParams();

  const isUpdate = Boolean(id);

  const [loading, setLoading] = useState(false);

  const [initialValues, setInitialValues] = useState({
    name: "",
    emp_Id: "",
    email: "",
    designation: "",
    department: "",
    salary: "",
    status: "",
    mobile: "",
  });

  // Update route par employee ni details load karo
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

        setInitialValues({
          name: employee.name ?? "",
          emp_Id: employee.emp_Id ?? "",
          email: employee.email ?? "",
          designation: employee.designation ?? "",
          department: employee.department ?? "",
          salary: employee.salary ?? "",
          status: employee.status ?? "",
          mobile: employee.mobile ?? "",
        });
      } catch (error) {
        console.error("Fetch error:", error);
        alert(
          error.response?.data?.message ||
          error.message ||
          "Employee details load failed"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [id, navigate]);

  // Add / Update submit
  const handleFormSubmit = async (values, { resetForm }) => {
    try {
      if (isUpdate) {
        // Only name, email and mobile can be updated
        const updateData = {
          name: values.name,
          email: values.email,
          mobile: values.mobile,
        };

        await UpdateEmplpyee(id, updateData);

        alert("Employee updated successfully!");
      } else {
        const employeeData = {
          ...values,
          emp_Id: Number(values.emp_Id),
          salary: Number(values.salary),
        };

        await addEmployee(employeeData);

        alert("Employee added successfully!");
        resetForm();
      }

      navigate("/");
    } catch (error) {
      console.error(
        "Submit error:",
        error.response?.data || error.message
      );

      alert(
        error.response?.data?.message ||
        error.message ||
        "Something went wrong"
      );
    }
  };

  if (loading) {
    return <h3 className="text-center mt-5">Loading...</h3>;
  }

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">
        {isUpdate ? "Update Employee" : "Add Employee"}
      </h2>

      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={Validationschema}
        onSubmit={handleFormSubmit}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  value={values.name}
                  onChange={handleChange}
                  isInvalid={touched.name && !!errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="4">
                <Form.Label>Employee ID</Form.Label>
                <Form.Control
                  type="number"
                  name="emp_Id"
                  placeholder="Enter employee ID"
                  value={values.emp_Id}
                  onChange={handleChange}
                  disabled={isUpdate}
                  isInvalid={touched.emp_Id && !!errors.emp_Id}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.emp_Id}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="4">
                <Form.Label>Email</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text>@</InputGroup.Text>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={touched.email && !!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="4">
                <Form.Label>Designation</Form.Label>
                <Form.Control
                  type="text"
                  name="designation"
                  placeholder="Enter designation"
                  value={values.designation}
                  onChange={handleChange}
                  disabled={isUpdate}
                  isInvalid={
                    touched.designation && !!errors.designation
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {errors.designation}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="4">
                <Form.Label>Department</Form.Label>
                <Form.Select
                  name="department"
                  value={values.department}
                  onChange={handleChange}
                  disabled={isUpdate}
                  isInvalid={
                    touched.department && !!errors.department
                  }
                >
                  <option value="">Select department</option>
                  <option value="HR">HR</option>
                  <option value="finance">Finance</option>
                  <option value="it">IT</option>
                  <option value="security">Security</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.department}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="4">
                <Form.Label>Salary</Form.Label>
                <Form.Control
                  type="number"
                  name="salary"
                  placeholder="Enter salary"
                  value={values.salary}
                  onChange={handleChange}
                  disabled={isUpdate}
                  isInvalid={touched.salary && !!errors.salary}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.salary}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-4">
              <Form.Group as={Col} md="6">
                <Form.Label>Status</Form.Label>
                <Form.Select
                  name="status"
                  value={values.status}
                  onChange={handleChange}
                  disabled={isUpdate}
                  isInvalid={touched.status && !!errors.status}
                >
                  <option value="">Select status</option>
                  <option value="active">Active</option>
                  <option value="terminated">Terminated</option>
                  <option value="suspend">Suspend</option>
                  <option value="hold">Hold</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.status}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6">
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  type="text"
                  name="mobile"
                  placeholder="Enter mobile number"
                  value={values.mobile}
                  onChange={handleChange}
                  isInvalid={touched.mobile && !!errors.mobile}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.mobile}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Button type="submit" variant="primary">
              {isUpdate ? "Update Employee" : "Add Employee"}
            </Button>

            <Button
              type="button"
              variant="secondary"
              className="ms-2"
              onClick={() => navigate("/")}
            >
              Cancel
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default AddEmployee;