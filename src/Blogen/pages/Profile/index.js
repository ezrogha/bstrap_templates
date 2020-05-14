import React from "react";
import { Link } from 'react-router-dom'
import { FaUser, FaArrowLeft, FaTrash, FaLock } from "react-icons/fa";
import { Container, Row, Col, Button, Card, Form, Image } from "react-bootstrap";

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import '../Dashboard/components/Actions/index.css'
import Header from "../../components/Header";
import Avatar from '../../img/avatar.png'

export default () => {
  return (
    <div>
      <Header Icon={FaUser} title="Profile" bgColor="bg-primary" />

      <div className="py-4 mb-4 bg-light">
        <Container>
          <Row>
            <Col md="3">
              <Link to="/blogen/dashboard" className="btn btn-light btn-block">
                <FaArrowLeft /> Back To Dashboard
              </Link>
            </Col>
            <Col md="3">
              <Button variant="success" block>
                <FaLock /> Change Password
              </Button>
            </Col>
            <Col md="3">
              <Button variant="danger" block>
                <FaTrash /> Delete Account
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="py-2">
        <Container>
          <Row>
            <Col md="9">
              <Card>
                <Card.Header>
                  <h4>Edit Profile</h4>
                </Card.Header>
                <Card.Body>
                  <Form>
                    <Form.Group>
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" value="Roghashin Timbiti" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" value="rtimbiti@gmail.com" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Bio</Form.Label>
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
            <Col md="3">
              <Image src={Avatar} fluid />
              <Button variant="primary" block className="mt-2">Edit Image</Button>
              <Button variant="danger" block>Delete Image</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
