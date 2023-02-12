import ModalComponent from 'components/Modal/Modal';
import UserMenu from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { useState } from 'react';
import { Badge, Container, Nav, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { logOut } from 'redux/auth/auth.operation';
import { selectIsLoggedIn, selectUser } from 'redux/auth/auth.selectors';

const Layout = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { isRefreshing } = useAuth();

  const user = useSelector(selectUser);

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const handleLogout = () => dispatch(logOut());

  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);
  return (
    <>
      <header>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={NavLink} to="/">
              Home
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                {isLoggedIn && (
                  <Nav.Link as={NavLink} to="contacts">
                    Contacts
                  </Nav.Link>
                )}
              </Nav>
              <Nav>
                {!isLoggedIn ? (
                  <Nav.Link as={NavLink} to="login">
                    Login
                  </Nav.Link>
                ) : (
                  <h3 onClick={handleShowOffcanvas}>
                    <Badge bg="dark">{user.name}</Badge>
                  </h3>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
        {!isRefreshing && <Outlet />}
        <UserMenu
          showOffcanvas={showOffcanvas}
          handleCloseOffcanvas={handleCloseOffcanvas}
          offcanvasTitle={user.name}
          offcanvasBody={
            <>
              <b>Email: </b>
              {user.email}
            </>
          }
          openModal={handleShowModal}
        />
        <ModalComponent
          showModal={showModal}
          handleCloseModal={() => {
            handleCloseModal();
            handleCloseOffcanvas();
          }}
          modalTitle={user.name}
          modalText="Confirm logout"
          handleConfirmation={handleLogout}
        />
      </main>
    </>
  );
};
export default Layout;
