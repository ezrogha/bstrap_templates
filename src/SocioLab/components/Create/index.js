import React from "react";
import { Container, Button, Row, Col, Image } from "react-bootstrap";

import CheckContent from '../Home/components/CheckContent';
import Create1 from '../../img/create-section1.jpg';

export default function index() {
  return (
    <div id="create">
      <div className="bg-primary">
        <Container>
          <Row>
            <Col className="text-center p-5">
              <h1 className="display-4">Create</h1>
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
      <section className="bg-dark py-5">
        <Container>
          <Row>
            <Col md="6">
              <h2>Create Your Passion</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
                reiciendis, voluptate at alias laborum odit aliquid tempore
                perspiciatis repudiandae hic?
              </p>
              <CheckContent backgroundColor="white" color="#008ed6" />
              <CheckContent backgroundColor="white" color="#008ed6" />
            </Col>
            <Col md="6">
              <Image src={Create1} roundedCircle fluid />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
