import React, { useState } from "react";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";

export default () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <footer className="bg-dark">
      <Container>
        <Row>
          <Col className="py-4 text-center">
            <h2>LoopLAB</h2>
            <p>Copyright &copy; {new Date().getFullYear()}</p>
            <Button variant="primary" onClick={handleShow}>
              Contact
            </Button>
            
            {/* MODAL */}
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>CONTACT US</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleClose} block size="md">
                  Submit
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
