import React from "react";
import { Container, Button, Row, Col, Image } from "react-bootstrap";

import CheckContent from "../Home/components/CheckContent";
import Share1 from "../../img/share-section1.jpg";

export default function index() {
  return (
    <div id="share">
      <div className="bg-primary">
        <Container>
          <Row>
            <Col className="text-center p-5">
              <h1 className="display-4">Share</h1>
              <p className="lead">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Sapiente doloribus ut iure itaque quibusdam rem accusantium
                deserunt reprehenderit sunt minus.
              </p>
              <Button variant="outline-light">Find Out More</Button>
            </Col>
          </Row>
        </Container>
      </div>
      <section className="bg-light text-muted py-5">
        <Container>
          <Row>
            <Col md="6">
              <Image src={Share1} roundedCircle fluid />
            </Col>
            <Col md="6">
              <h2>Share What You Create</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
                reiciendis, voluptate at alias laborum odit aliquid tempore
                perspiciatis repudiandae hic?
              </p>
              <CheckContent backgroundColor="#333" color="white" />
              <CheckContent backgroundColor="#333" color="white" />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
