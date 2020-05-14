import React from 'react'
import { Card, Form, Button } from 'react-bootstrap'

export default function index() {
  return (
    <Card className="card-form bg-primary text-center" style={{ opacity: 0.8 }}>
      <Card.Body>
        <h3>Sign Up Today</h3>
        <p>Please fill out this form to register</p>
        <Form>
          <Form.Group>
            <Form.Control size="lg" type="text" placeholder="Username" />
          </Form.Group>
          <Form.Group>
            <Form.Control size="lg" type="text" placeholder="Email" />
          </Form.Group>
          <Form.Group>
            <Form.Control size="lg" type="text" placeholder="Password" />
          </Form.Group>
          <Form.Group>
            <Form.Control size="lg" type="text" placeholder="Confirm Password" />
          </Form.Group>
          <Button variant="outline-light" block>Submit</Button>
        </Form>
      </Card.Body>
    </Card>
  )
}
