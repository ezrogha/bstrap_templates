import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default () => {
  return (
    <div className="mt-5 p-5 bg-dark text-white">
      <Container>
        <Row>
          <Col>
            <p className="text-center">
              Copyright &copy; {new Date().getFullYear()}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
