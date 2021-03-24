import React from "react";
import { Card, Accordion } from "react-bootstrap";
import { FaArrowCircleDown } from "react-icons/fa";

export default ({ title, keyValue }) => {
  console.log(keyValue)
  return (
    <Card>
      <Card.Header>
        <h5>
          <Accordion.Toggle as={Card.Header} eventKey={keyValue}>
            <FaArrowCircleDown /> {title}
          </Accordion.Toggle>
        </h5>
      </Card.Header>
      <Accordion.Collapse eventKey={keyValue}>
        <Card.Body>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit odit
          laborum qui, debitis, sequi dolores nobis mollitia labore quasi earum
          laboriosam nihil cupiditate magnam iusto nostrum doloremque
          accusantium repudiandae expedita autem et, repellendus suscipit
          consequatur! Alias, maiores amet sunt ab inventore illo, deleniti
          facilis consequatur tenetur nam pariatur fuga nisi!
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};
