import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import * as formik from "formik";

import { addEmployee } from "../api/studentFetch";

import Validationschema from "../validation/validation";

function FormExample() {
  const { Formik } = formik;

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-5">Add Employee</h2>

      <Formik
        validationSchema={Validationschema}
        onSubmit={(values, { resetForm }) => {
          addEmployee(values);
          resetForm();
        }}
        initialValues={{
          name: "",
          emp_Id: "0",
          email: "",
          designation: "",
          department: "",
          salary: "",
          status: "null",
          mobile: "",
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            {/* Name, Employee ID, Email */}
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
                  isValid={touched.name && !errors.name}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="4">
                <Form.Label>Employee ID</Form.Label>

                <Form.Control
                  type="number"
                  name="emp_Id"
                  placeholder="Enter employee ID"
                  value={values.emp_Id}
                  onChange={handleChange}
                  isInvalid={touched.emp_Id && !!errors.emp_Id}
                  isValid={touched.emp_Id && !errors.emp_Id}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.emp_Id}
                </Form.Control.Feedback>

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
                    isValid={touched.email && !errors.email}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>

                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>

            {/* Designation, Department, Salary */}
            <Row className="mb-3">
              <Form.Group as={Col} md="4">
                <Form.Label>Designation</Form.Label>

                <Form.Control
                  type="text"
                  name="designation"
                  placeholder="Enter designation"
                  value={values.designation}
                  onChange={handleChange}
                  isInvalid={touched.designation && !!errors.designation}
                  isValid={touched.designation && !errors.designation}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.designation}
                </Form.Control.Feedback>

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="4">
                <Form.Label>Department</Form.Label>

                <Form.Select
                  name="department"
                  value={values.department}
                  onChange={handleChange}
                  isInvalid={touched.department && !!errors.department}
                  isValid={touched.department && !errors.department}
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
                  isInvalid={touched.salary && !!errors.salary}
                  isValid={touched.salary && !errors.salary}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.salary}
                </Form.Control.Feedback>

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>

            {/* Status, Mobile */}
            <Row className="mb-3">
              <Form.Group as={Col} md="6">
                <Form.Label>Status</Form.Label>

                <Form.Select
                  name="status"
                  value={values.status}
                  onChange={handleChange}
                  isInvalid={touched.status && !!errors.status}
                  isValid={touched.status && !errors.status}
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
                  placeholder="Enter 10 digit mobile"
                  value={values.mobile}
                  onChange={handleChange}
                  isInvalid={touched.mobile && !!errors.mobile}
                  isValid={touched.mobile && !errors.mobile}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.mobile}
                </Form.Control.Feedback>

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>

            {/* Submit */}
            <Button type="submit">Add Employee</Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default FormExample;
