import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalComponent = ({
  handleConfirmation,
  handleCloseModal,
  showModal,
  modalTitle,
  modalText,
}) => {
  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{modalText}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        <Button
          variant="dark"
          onClick={() => {
            handleConfirmation();
            handleCloseModal();
          }}
        >
          Logout
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
