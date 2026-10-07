import * as yup from "yup";

// Yup Validation
const Validationschema = yup.object().shape({
  name: yup.string().required("Name is required"),

  emp_Id: yup
    .number()
    .typeError("Employee ID must be a number")
    .required("Employee ID is required"),

  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),

  designation: yup.string().required("Designation is required"),

  department: yup
    .string()
    .oneOf(["HR", "finance", "it", "security"], "Select valid department")
    .required("Department is required"),

  salary: yup
    .number()
    .typeError("Salary must be a number")
    .required("Salary is required"),

  status: yup
    .string()
    .oneOf(["active", "terminated", "suspend", "hold"], "Select valid status")
    .required("Status is required"),

  mobile: yup
    .string()
    .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
    .required("Mobile number is required"),
});

export default Validationschema;
