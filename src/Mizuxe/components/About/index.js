import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

import styles from "./index.module.scss";
import AccordionItem from "./AccordionItem";

export default function index() {
  return (
    <section id={styles.about} className="bg-light text-center py-5">
      <Container id="about">
        <Row>
          <Col>
            <div id={styles.why} className="mb-5">
              <h1 className="pb-3">Why This Book?</h1>
              <p className="lead pb-3 text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus obcaecati alias rerum dolore fugiat debitis?
              </p>
            </div>

            <Accordion>
              <AccordionItem title="Get Inspired" keyValue="0" />
              <AccordionItem title="Gain The Knowledge" keyValue="1"/>
              <AccordionItem title="Open Your Mind" keyValue="2"/>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
