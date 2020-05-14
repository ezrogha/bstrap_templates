import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import { FaCogs, FaCloud, FaCartPlus } from "react-icons/fa";

import HomeIcon from "./components/HomeIcon";

import styles from './index.module.scss'

export default () => {
  return (
    <>
    <div className="py-5">
      <Container>
        <Row>
          <HomeIcon title="Turning Gears" Icon={FaCogs} />
          <HomeIcon title="Sending Data" Icon={FaCloud} />
          <HomeIcon title="Sending Money" Icon={FaCartPlus} />
        </Row>
      </Container>
    </div>

    <div id={styles.homeHeader} className="py-5">
      <div>
        <Row>
          <Col>
            <Container className="pt-5">
              <h1>Are You Ready To Get Started?</h1>
              <p className="d-none d-md-block">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est eaque magni sit dolores. Nisi, dolor nam modi perspiciatis consequatur soluta.                
              </p>
            </Container>
          </Col>
        </Row>
      </div>
    </div>
    </>
  );
};
