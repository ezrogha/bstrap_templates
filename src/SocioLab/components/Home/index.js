import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import CheckContent from "./components/CheckContent";
import RegisterForm from "./components/RegisterForm";

import styles from "./index.module.css";

export default function index() {
  return (
    <div className={styles.home} id="home">
      <div className={styles.darkOverlay}>
        <div className="d-flex align-items-center" style={{ height: "100%" }}>
          <Container>
            <Row>
              <Col lg="8" className="d-none d-lg-block">
                <h1 className="display-4">
                  Build
                  <strong> social profiles</strong> and gain revenue
                  <strong> profits</strong>
                </h1>
                <CheckContent backgroundColor="white" color="#008ed6" />
                <CheckContent backgroundColor="white" color="#008ed6" />
                <CheckContent backgroundColor="white" color="#008ed6" />
              </Col>
              <Col lg="4">
                <RegisterForm />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}
