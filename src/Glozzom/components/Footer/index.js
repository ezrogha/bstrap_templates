import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import styles from './index.module.scss'

export default function index() {
  return (
    <div className="p5 text-center text-white p-4" id={styles.footer}>
      <Container>
        <Row>
          <Col>
            <p>Copyright &copy; {new Date().getFullYear()}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
