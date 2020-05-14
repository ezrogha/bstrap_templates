import React from "react";
import { Link } from "react-router-dom";
import { FaUsps, FaArrowLeft, FaCheck, FaTrash } from "react-icons/fa";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import Header from "../../components/Header";
import "../Dashboard/components/Actions/index.css";

export default () => {
  return (
    <div>
      <Header Icon={FaUsps} title="Post One" bgColor="bg-primary" />
      <div className="py-4 mb-4 bg-light">
        <Container>
          <Row>
            <Col md="3">
              <Link to="/blogen/dashboard" className="btn btn-light btn-block" block>
                <FaArrowLeft /> Back to Dashboard
              </Link>
            </Col>
            <Col md="3">
              <Button variant="success" block>
                <FaCheck /> Save changes
              </Button>
            </Col>
            <Col md="3">
              <Button variant="danger" block>
                <FaTrash /> Delete Post
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row className="mt-5">
            <Col>
              <Card>
                <Card.Header>
                  <h4>Edit Post</h4>
                </Card.Header>
                <Card.Body>
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
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
