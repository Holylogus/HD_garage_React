import { Outlet, Link } from "react-router-dom";
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

const Layout = () => {
  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">
            <Link>HD Garage</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Főoldal</Nav.Link>
              <Nav.Link href="/admin">Admin</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
      <article>
        {

        }
        <Outlet/>
      </article>
    </>
  );
};

export default Layout;
