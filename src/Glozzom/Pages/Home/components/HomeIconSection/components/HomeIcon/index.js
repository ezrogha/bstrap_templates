import React from 'react'
import { Col } from 'react-bootstrap'
import { FaCogs } from 'react-icons/fa'

export default ({ Icon, title }) => {
  return (
    <Col md="4" className="mb-4 text-center">
      <h1 className="display-3"><Icon /></h1>
      <h3>{title}</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, veniam.</p>
    </Col>
  )
}
