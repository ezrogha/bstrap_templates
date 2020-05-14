import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

export default () => {
  return (
    <div className="py-5">
      <Container className="text-center">
        <h1>Photo Gallery</h1>
        <p className="lead">Check out our photos</p>
        <Row className="mb-4">
          <Col md="4" className="mb-4">
            <a href="https://source.unsplash.com/random/560x560">
              <Image src="https://source.unsplash.com/random/560x560" fluid />
            </a>
          </Col>
          <Col md="4" className="mb-4">
            <a href="https://source.unsplash.com/random/561x561">
              <Image src="https://source.unsplash.com/random/561x561" fluid />
            </a>
          </Col>
          <Col md="4" className="mb-4">
            <a href="https://source.unsplash.com/random/562x562">
              <Image src="https://source.unsplash.com/random/562x562" fluid />
            </a>
          </Col>
          <Col md="4" className="mb-4">
            <a href="https://source.unsplash.com/random/563x563">
              <Image src="https://source.unsplash.com/random/563x563" fluid />
            </a>
          </Col>
          <Col md="4" className="mb-4">
            <a href="https://source.unsplash.com/random/564x564">
              <Image src="https://source.unsplash.com/random/564x564" fluid />
            </a>
          </Col>
          <Col md="4" className="mb-4">
            <a href="https://source.unsplash.com/random/565x565">
              <Image src="https://source.unsplash.com/random/565x565" fluid />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
