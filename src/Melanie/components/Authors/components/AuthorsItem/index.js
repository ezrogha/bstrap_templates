import React from "react";
import { Col, Card, Image } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

import styles from './index.module.scss';

export default ({ name, avatar, position }) => {
  return (
    <Col lg="3" md="6" id={styles.authorItem}>
      <Card>
        <Card.Body>
          <Image src={avatar} fluid roundedCircle className="w-50 mb-3" />
          <h3>{name}</h3>
          <h5 className="text-muted">{position}</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi
            nostrum, ab libero voluptas officia.
          </p>
          <div className="d-flex justify-content-center text-light">
            <div className="p-4">
              <FaFacebook size={20} />
            </div>
            <div className="p-4">
              <FaTwitter size={20} />
            </div>
            <div className="p-4">
              <FaLinkedin size={20} />
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};
