import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="mt-4 mb-4 rounded justify-content-between">
      <Nav.Link className="text-white">
        Blog app
      </Nav.Link>
      <div className="d-flex">
        <Nav.Link as={NavLink} to="/" className="text-white">
          Home
        </Nav.Link>
        <Nav.Link as={NavLink} to="/about" className="text-white">
          About
        </Nav.Link>
      </div>
    </Navbar>
  );
};

export default NavBar;
