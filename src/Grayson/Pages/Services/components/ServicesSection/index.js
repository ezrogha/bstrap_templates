import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ServcieCard from './components/ServcieCard'

export default () => {
  return (
    <div className="py-5">
      <Container>
        <Row>
          <Col md="4">
            <ServcieCard title="One" price="59.99" />
          </Col>
          <Col md="4">
            <ServcieCard title="Two" price="99.99" />
          </Col>
          <Col md="4">
            <ServcieCard title="Three" price="129.99" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
