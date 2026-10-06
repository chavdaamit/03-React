import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const MyNavbar = () => {
  return (
    <>
      <Container>
        <Navbar expand="lg" className="bg-body-tertiary shadow-sm rounded-3">
          <Navbar.Brand as={NavLink} to="/" className="fs-4">
            Employee Management System
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to={"/"}>
                Employee
              </Nav.Link>
              <Nav.Link as={NavLink} to={"/add"}>
                Add
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
};

export default MyNavbar;
