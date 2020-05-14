import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";

import Laptop from '../../../../images/laptop.png'
import styles from './index.module.scss'

export default () => {
  return (
    <>
    <div className="py-3">
      <Container>
        <Row>
          <Col md="6" className="align-self-center">
            <h3>Lorem Ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              eveniet blanditiis incidunt iusto corrupti illum cum laudantium ex
              sequi amet.
            </p>
            <Button size="lg" variant="outline-danger">Learn More</Button>
          </Col>
          <Col md="6">
            <Image src={Laptop} fluid />
          </Col>
        </Row>
      </Container>
    </div>

    <div id={styles.videoPlay}>
      <div>
        <Row>
          <Col>
            <Container className="p-5">
              <a href="#">
                <FaPlay className="display-4" />
              </a>
              <h1>See What We Do</h1>
            </Container>
          </Col>
        </Row>
      </div>
    </div>
    </>
  );
};
