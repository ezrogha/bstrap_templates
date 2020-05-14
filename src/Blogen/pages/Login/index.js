import React from "react";
import { Container, Row, Col, Card, Form } from 'react-bootstrap'
import Header from "../../components/Header";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <Header Icon={FaUser} title="Blogen Admin" bgColor="bg-primary" />

      <div className="py-4 mb-4 bg-light" />
      <div>
        <Container>
          <Row>
            <Col md="6" className="mx-auto">
              <Card>
                <Card.Header>
                  <h3>Account Login</h3>
                </Card.Header>
                <Card.Body>
                  <Form>
                    <Form.Group>
                      <Form.Label>Email</Form.Label>
                      <Form.Control />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Password</Form.Label>
                      <Form.Control />
                    </Form.Group>
                    <Link to="/blogen/dashboard" className="btn btn-primary btn-lg btn-block">Login</Link>
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
