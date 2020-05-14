import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import styles from './index.module.scss'

export default ({ title }) => {
  return (
    <div id={styles.header} className="py-3">
      <Container>
        <Row>
          <Col md="6" className="text-center m-auto">
            <h1>{title}</h1>
            <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, temporibus?</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
