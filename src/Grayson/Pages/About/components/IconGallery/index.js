import React from 'react'
import { Container, Row } from 'react-bootstrap'

import IconCard from './components/IconCard'
import { FaBuilding, FaBullhorn, FaComments, FaCreditCard, FaBox, FaCoffee } from 'react-icons/fa'

export default function index() {
  return (
    <div className="p-5">
      <Container>
        <Row className="mb-4">
          <IconCard bgColor="bg-danger" Icon={FaBuilding} />
          <IconCard bgColor="bg-dark" Icon={FaBullhorn} />
          <IconCard bgColor="bg-danger" Icon={FaComments} />
        </Row>
        <Row>
          <IconCard bgColor="bg-dark" Icon={FaBox} />
          <IconCard bgColor="bg-danger" Icon={FaCreditCard} />
          <IconCard bgColor="bg-dark" Icon={FaCoffee} />
        </Row>
      </Container>
    </div>
  )
}
