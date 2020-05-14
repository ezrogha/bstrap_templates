import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

import Person1 from '../../../../images/person1.jpg'
import Person2 from '../../../../images/person2.jpg'
import Person3 from '../../../../images/person3.jpg'
import Person4 from '../../../../images/person4.jpg'

export default () => {
  return (
    <div className="py-5 bg-dark text-white">
      <Container>
        <h1 className="text-center">Our Staff</h1>
        <hr />
        <Row className="text-center">
          <Col md="3">
            <Image src={Person1} className="mb-3" roundedCircle fluid />
            <h4>Jane Doe</h4>
            <small>Marketing Manager</small>
          </Col>
          <Col md="3">
            <Image src={Person2} className="mb-3" roundedCircle fluid />
            <h4>Sara Williams</h4>
            <small>Marketing Manager</small>
          </Col>
          <Col md="3">
            <Image src={Person3} className="mb-3" roundedCircle fluid />
            <h4>Sam Smith</h4>
            <small>Business Manager</small>
          </Col>
          <Col md="3">
            <Image src={Person4} className="mb-3" roundedCircle fluid />
            <h4>John Doe</h4>
            <small>Web Developer</small>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
