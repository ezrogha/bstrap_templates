import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default () => {
  return (
    <div className="p-4 text-white bg-dark text-center">
      <Container>
        <h2>Testmonials</h2>
        <Row>
          <Col>
            <div>
              <blockquote className="blockquote">
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <footer className="blockquote-footer">
                  John Doe from 
                  <cite>RGH.corp</cite>
                </footer>
              </blockquote>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
