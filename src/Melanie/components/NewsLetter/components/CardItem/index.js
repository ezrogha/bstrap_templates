import React from "react";
import { Card } from "react-bootstrap";

export default ({ title }) => {
  return (
    <Card className="mb-2">
      <Card.Body>
        <Card.Text className="text-center">
          <h3>{title}</h3>
          <p className="text-muted">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet,
            deserunt.
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
