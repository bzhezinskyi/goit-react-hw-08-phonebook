import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={NavLink} to="/">
              React-Bootstrap
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={NavLink} to="contacts">
                  Contacts
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link as={NavLink} to="register">
                  Register
                </Nav.Link>
                <Nav.Link as={NavLink} to="login">
                  Login
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* <Nav variant="tabs" defaultActiveKey="/">
          <Nav.Item>
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="adduser">
              AddUser
            </Nav.Link>
          </Nav.Item>
        </Nav> */}
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
