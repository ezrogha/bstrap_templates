import React from 'react'
import { Container, Row } from 'react-bootstrap'

import CardSection from '../CardSection'

export default () => {
  return (
    <div className="py-3">
      <Container>
        <Row>
          <CardSection title="One" count="3" author="Rogha" />
          <CardSection title="Two" count="1" bottomCardTheme="bg-danger text-white" smallText="text-white" author="Martin" />
          <CardSection title="One" count="2" author="Roshin" />
        </Row>
      </Container>
    </div>
  )
}
