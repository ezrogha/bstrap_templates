import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import Question from "./components/Question";

export default () => {
  return (
    <div className="p-5 bg-dark text-white">
      <Container>
        <h1 className="text-center">Frequently Asked Questions</h1>
        <hr />
        <Row>
          <Col md="6">
            <Accordion>
              <Question eventKey="0" title="One" />
              <Question eventKey="1" title="Two" />
              <Question eventKey="2" title="Three" />
            </Accordion>
          </Col>
          <Col md="6">
            <Accordion>
              <Question eventKey="3" title="Four" />
              <Question eventKey="4" title="Five" />
              <Question eventKey="5" title="Six" />
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
