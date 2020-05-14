import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

export default () => {
  return (
    <div className="my-4">
      <Container>
        <Row>
          <Col md="4">
            <Card className="p-2">
              <Card.Body>
                <h4>Get In Touch</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur, odio!
                </p>
                <h4>Address</h4>
                <p>Kampala, Uganda</p>
                <h4>Email</h4>
                <p>test@mail.com</p>
                <h4>Phone</h4>
                <p>(777) 777-7777</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md="8">
            <Card className="p-2">
              <Card.Body>
                <h3 className="text-center">
                  Please fill out this form to contact us
                </h3>
                <hr />
                <Row>
                  <Col md="6">
                    <Form.Group>
                      <Form.Control placeholder="First Name" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control placeholder="Email" />
                    </Form.Group>
                  </Col>
                  <Col md="6">
                    <Form.Group>
                      <Form.Control placeholder="Last Name" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control placeholder="Phone" />
                    </Form.Group>
                  </Col>
                  <Col md="12">
                    <Form.Group>
                      <Form.Control as="textarea" placeholder="Last Name" />
                    </Form.Group>
                  </Col>
                  <Col md="12">
                    <Button variant="outline-danger" size="bg" block>Submit</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
