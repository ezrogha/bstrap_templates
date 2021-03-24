import React from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import { FaUser, FaEnvelopeOpen, FaPencilAlt } from "react-icons/fa";

import FormInput from "./components/FormInput";

import Logo from '../../img/mlogo.png';
import styles from './index.module.scss';

export default () => {
  return (
    <>
    <footer className="bg-light py-5" id="contact">
      <Container>
        <Row>
          <Col lg="9">
            <h3>Get In Touch</h3>
            <p class="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              temporibus!
            </p>
            <Form>
              <FormInput type="text" text="Name" Icon={FaUser} />
              <FormInput type="text" text="Email" Icon={FaEnvelopeOpen} />
              <FormInput type="textarea" text="Message" Icon={FaPencilAlt} />
            </Form>
            <Button style={{ backgroundColor: "#3292a6", border: "none" }} size="lg" block>Submit</Button>
          </Col>
          <Col lg="3" className="align-self-center">
            <Image src={Logo} alt="Footer Logo" fluid />
          </Col>
        </Row>
      </Container>
    </footer>
    <footer id={styles.footer2} className="py-5 text-white">
      <Container>
        <Row className="text-center">
          <Col md="6" className="ml-auto">
            Copyright &copy; {new Date().getFullYear()}
          </Col>
        </Row>
      </Container>
    </footer>
    </>
  );
};
