import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";

import styles from "./index.module.scss";

import Book from "../../img/book.png";

export default () => {
  return (
    <section id={styles.showcase} className="py-5">
      <div id="showcase" className={styles.showcaseOverlay}>
        <Container>
          <Row>
            <Col lg="6" className="text-center text-white">
              <h1 className="display-2 mt-5 pt-5">Do What You Dream Of...</h1>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                tempora!
              </p>
              <Button
                size="lg"
                variant="outline-secondary"
                className="text-white"
              >
                <FaArrowRight /> Read More
              </Button>
            </Col>
            <Col lg="6">
              <Image
                src={Book}
                alt="Book"
                fluid
                className="d-none d-lg-block"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};
