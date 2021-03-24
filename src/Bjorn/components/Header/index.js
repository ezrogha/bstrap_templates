import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default ({ bgColor, Icon, title }) => {
  return (
    <div className={`${bgColor} py-4 text-white`}>
      <Container>
        <Row>
          <Col md="6">
            <h1>
              {Icon && <Icon />}
              {` ${title}`}
            </h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
