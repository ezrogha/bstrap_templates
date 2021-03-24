import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import styles from "./index.module.scss";
import CardItem from "./components/CardItem";

export default () => {
  return (
    <>
      <section className="bg-dark text-white py-5">
        <Container>
          <Row>
            <Col md="4">
              <Form.Control
                size="lg"
                placeholder="Enter Name"
                className="mb-2"
              />
            </Col>
            <Col md="4">
              <Form.Control
                size="lg"
                placeholder="Enter Email"
                className="mb-2"
              />
            </Col>
            <Col md="4">
              <Button
                id={styles.subscribeBtn}
                variant="primary"
                size="lg"
                block
              >
                Subscribe
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row id={styles.cardItems}>
            <Col md="3">
              <CardItem title="Be Better" />
            </Col>
            <Col md="3">
            <CardItem title="Be Smarter" />
            </Col>
            <Col md="3">
            <CardItem title="Be Faster" />
            </Col>
            <Col md="3">
            <CardItem title="Be Stronger" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
