import React, { useState } from "react";
import "./AddCourseModal.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { IoCloseSharp } from "react-icons/io5";
import { FloatingLabel, Form, Row } from "react-bootstrap";
import { GoPlus } from "react-icons/go";

export default function AddCourseModal(props) {
  // const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* <Button variant="primary" onClick={() => setShowModal(true)}>
        Add Course Modal
      </Button>

      <Modal centered show={showModal} onHide={() => setShowModal(false)}>
        <div className="modalHeaderAddCourse">
          <div className="headerTitle">Add Course</div>
          <div onClick={() => setShowModal(false)}>
            <IoCloseSharp className="closeBtn" />
          </div>
        </div>
        <Modal.Body className="modalBodyAddCourse">
          <Form>
            <div className="uploadDiv">
              <div className="uploadTxt">Upload</div>
              <div>
                <GoPlus className="plusBtn" />
              </div>
            </div>
            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                rows={3}
                className="courseNameDiv"
                placeholder="Course Name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                rows={5}
                className="courseNameDiv"
                placeholder="Course Description"
              />
            </Form.Group>
            <Form.Control
              type="text"
              className="mb-5"
              id="authorNameDiv"
              placeholder="Author Name"
            />
          </Form>

          <Row style={{ justifyContent: "center", alignItems: "center" }}>
            <Row className="addBtnDiv">
              <div className="addTxt">Add</div>
            </Row>
          </Row>
        </Modal.Body>
      </Modal> */}
      <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="addmodal1">
        <Modal.Title id="contained-modal-title-vcenter">
          Add Course
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form.Group controlId="formFile" className="mb-3" >
        {/* <Form.Label>Choose File</Form.Label> */}
        <Form.Control type="file" style={{border:"2px solid #FC3973", borderRadius:"2rem"}}/>
      </Form.Group>
      <FloatingLabel
        controlId="floatingTextarea"
        label="Course name"
        className="mb-3"
      >
        <Form.Control as="textarea" placeholder="course name" style={{border:"2px solid #FC3973"}}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea2" label="course description">
        <Form.Control
          as="textarea"
          placeholder="course description"
          style={{ height: '100px', border:"2px solid #FC3973"}}
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Author name"
        className="mb-3"
        style={{marginTop:"1rem"}}
      >
        <Form.Control type="text" placeholder="Author name" style={{border:"2px solid #FC3973", borderRadius:"2rem"}}/>
      </FloatingLabel>
      </Modal.Body>
      <Modal.Footer id="addmodal2">
        <Button onClick={props.onHide} id="addmodal3">Close</Button>
      </Modal.Footer>
    </Modal>
    </>
  );
}
