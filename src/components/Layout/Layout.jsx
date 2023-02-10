import Avatar from 'react-avatar';
import { Badge, Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { logOut } from 'redux/auth/auth.operation';
import { selectIsLoggedIn, selectUser } from 'redux/auth/auth.selectors';

const Layout = () => {
  const dispatch = useDispatch();
  const locatin = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  return (
    <>
      <header>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
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
                {!isLoggedIn ? (
                  <Nav.Link as={NavLink} to="login">
                    Login/Signup
                  </Nav.Link>
                ) : (
                  <>
                    <Avatar name={user.name} size="40" round={true} />
                    <h3>
                      <Badge bg="dark">{user.name}</Badge>
                    </h3>
                    <Button
                      variant="secondary"
                      onClick={() => {
                        dispatch(logOut());
                      }}
                    >
                      Logout
                    </Button>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {(locatin.pathname === '/register' ||
          locatin.pathname === '/login') && (
          <>
            <Navbar bg="dark" variant="dark" className="pt-0">
              <Container className="justify-content-center">
                <Nav fill>
                  <Nav.Link as={NavLink} to="/register" className="py-0">
                    Signup
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/login" className="py-0">
                    Login
                  </Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </>
        )}
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
