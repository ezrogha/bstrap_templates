import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Container, Col, Row, Button, Modal, Form } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import "./index.css";

export default () => {
  const [showPostModal, setShowPostModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);

  const handlePostShow = () => setShowPostModal(true);
  const handlePostClose = () => setShowPostModal(false);

  const handleCategoryShow = () => setShowCategoryModal(true);
  const handleCategoryClose = () => setShowCategoryModal(false);

  const handleUserShow = () => setShowUserModal(true);
  const handleUserClose = () => setShowUserModal(false);

  return (
    <div className="py-4 mb-4 bg-light">
      <Container>
        <Row>
          <Col md="3">
            <Button variant="primary" onClick={handlePostShow} block>
              <FaPlus /> Add Post
            </Button>
          </Col>
          <Col md="3">
            <Button variant="success" onClick={handleCategoryShow} block>
              <FaPlus /> Add Category
            </Button>
          </Col>
          <Col md="3">
            <Button variant="warning" onClick={handleUserShow} block>
              <FaPlus /> Add Users
            </Button>
          </Col>
        </Row>
      </Container>

      <Modal size="lg" show={showPostModal} onHide={handlePostClose}>
        <Modal.Header closeButton className="bg-primary text-white">
          <Modal.Title>Add Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Control as="select">
                <option>Web Development</option>
                <option>Tech & Gadgets</option>
                <option>Business</option>
                <option>Health & Wellness</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.File label="Choose File" custom />
              <Form.Text className="text-muted">Max Size 3mb</Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>Body</Form.Label>
              <Editor
                // editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                // onEditorStateChange={this.onEditorStateChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handlePostClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal size="lg" show={showCategoryModal} onHide={handleCategoryClose}>
        <Modal.Header closeButton className="bg-success text-white">
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleCategoryClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal size="lg" show={showUserModal} onHide={handleUserClose}>
        <Modal.Header closeButton className="bg-warning text-white">
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleUserClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
