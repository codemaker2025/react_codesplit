import React from 'react'
import { Modal, Button } from "react-bootstrap";

export default function WarningModal({ isVisible, closeModal, modalMessage }) {
  return (
    <Modal show={isVisible} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Notification</Modal.Title>
      </Modal.Header>
      <Modal.Body>{modalMessage}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
