import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "./AddAboutModal.css";

export default function AddAboutModal(props) {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton id="aam2" />
        <Modal.Body>
          <Form.Group controlId="formFileSm" className="mb-3">
            <Form.Label>Choose video file</Form.Label>
            <Form.Control type="file" size="sm" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer id="aam1">
          <Button>Save</Button>
          <Button onClick={props.onHide}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
