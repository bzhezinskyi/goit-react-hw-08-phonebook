import { Button, Offcanvas } from 'react-bootstrap';
import PropTypes from 'prop-types';

const UserMenu = ({
  showOffcanvas,
  handleCloseOffcanvas,
  offcanvasTitle,
  offcanvasBody,
  openModal,
}) => {
  return (
    <Offcanvas
      placement="end"
      show={showOffcanvas}
      onHide={handleCloseOffcanvas}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>{offcanvasTitle}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <p>{offcanvasBody}</p>
        <Button variant="secondary" onClick={openModal}>
          Logout
        </Button>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
export default UserMenu;

UserMenu.propTypes = {
  showOffcanvas: PropTypes.bool.isRequired,
  handleCloseOffcanvas: PropTypes.func.isRequired,
  offcanvasTitle: PropTypes.string,
  offcanvasBody: PropTypes.element,
  openModal: PropTypes.func.isRequired,
};
