import React from "react";

import { Card, ListGroup, Button } from "react-bootstrap";
import { FaCheck } from 'react-icons/fa'

export default ({ title, price }) => {
  return (
    <Card className="text-center">
      <Card.Header className="bg-dark text-white"><h3>{`Service Plan ${title}`}</h3></Card.Header>
      <Card.Body>
        <Card.Title>{`$${price}/Month`}</Card.Title>
        <Card.Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, quis.</Card.Text>
        <ListGroup>
          <ListGroup.Item><FaCheck /> Feature One</ListGroup.Item>
          <ListGroup.Item><FaCheck /> Feature Two</ListGroup.Item>
          <ListGroup.Item><FaCheck /> Feature Three</ListGroup.Item>
          <ListGroup.Item><FaCheck /> Feature Four</ListGroup.Item>
          <ListGroup.Item><FaCheck /> Feature Five</ListGroup.Item>
        </ListGroup>
        <Button variant="danger" size="lg" block className="mt-2">Get It</Button>
      </Card.Body>
      <Card.Footer className="text-muted">
        1 Year Plan
      </Card.Footer>
    </Card>
  );
};
