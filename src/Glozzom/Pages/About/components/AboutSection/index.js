import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import styles from './index.module.scss'

export default () => {
  return (
    <div className="py-3">
      <Container>
        <Row>
          <Col md="6">
            <h1>What We Do</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              fuga eaque. Amet, assumenda aliquid tempore dolorum error eveniet
              doloribus sed repellat quod, dolores fuga ipsam soluta. Aliquam
              accusantium pariatur aut sint deleniti laborum ducimus voluptatem?
              Architecto cumque quod suscipit officiis soluta, voluptate dicta
              blanditiis similique praesentium temporibus adipisci debitis
              labore!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              fuga eaque. Amet, assumenda aliquid tempore dolorum error eveniet
              doloribus sed repellat quod, dolores fuga ipsam soluta. Aliquam
              accusantium pariatur aut sint deleniti laborum ducimus voluptatem?
              Architecto cumque quod suscipit officiis soluta, voluptate dicta
              blanditiis similique praesentium temporibus adipisci debitis
              labore!
            </p>
          </Col>
          <Col md="6">
            <Image src="https://source.unsplash.com/random/700x700" id={styles.aboutImg} className="d-none d-md-block" roundedCircle fluid />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
