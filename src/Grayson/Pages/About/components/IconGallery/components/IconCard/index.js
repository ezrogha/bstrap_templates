import React from "react";
import { Col, Card } from "react-bootstrap";

export default ({ bgColor, textColor="text-white", Icon, title="Sample Heading" }) => {
  return (
    <Col md="4">
      <Card className={`${bgColor} ${textColor} text-center`}>
        <Card.Body>
          <Icon className="display-4" />
          <h3>{title}</h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          adipisci.
        </Card.Body>
      </Card>
    </Col>
  );
};
