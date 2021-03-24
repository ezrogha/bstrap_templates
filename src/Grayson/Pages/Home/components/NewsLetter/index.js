import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

export default function index() {
  return (
    <div className="text-center p-5 bg-dark text-white">
      <Container>
        <Row>
          <Col>
            <h1>Sign Up For Our Newsletter</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio asperiores consectetur, quae ducimus voluptates vero repellendus architecto maiores recusandae mollitia?</p>
            <Form inline className="justify-content-center">
              <Form.Control className="mr-2 mb-2" placeholder="Enter Name" />
              <Form.Control className="mr-2 mb-2" placeholder="Enter Email" />
              <Button variant="primary">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
