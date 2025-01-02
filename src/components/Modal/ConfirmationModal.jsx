import { Modal, Button } from "react-bootstrap"

export default function ConfirmationModal({ show, onClose, handleRemove, data }) {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Removal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to remove <span className="bg-primary text-white px-2 rounded">{data}</span> task?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancela
        </Button>
        <Button variant="danger" onClick={() => handleRemove()}>
          Remove
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
