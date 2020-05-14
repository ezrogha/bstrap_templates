import React from "react";

import { Card, Accordion } from "react-bootstrap";

export default ({ title, eventKey }) => {
  return (
    <Card className="bg-dark text-white">
      <Accordion.Toggle as={Card.Header} variant="link" eventKey={eventKey}>
        <h4>Question {title}</h4>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={eventKey}>
        <Card.Body>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt ea
          officiis distinctio exercitationem dolor minus placeat amet commodi,
          ab a perspiciatis officia nobis reiciendis numquam totam repudiandae
          molestias nulla, quod voluptatibus modi rerum laboriosam tenetur.
          Nihil, soluta eaque? Minima, deserunt.
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};
