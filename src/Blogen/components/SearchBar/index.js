import React from "react";
import { Container, InputGroup, Row, Col, FormControl, Button } from 'react-bootstrap'

export default ({ title, btnColor }) => {
  return (
    <div className="py-4 mb-4">
      <Container>
        <Row>
          <Col md="6" className="ml-auto">
            <InputGroup>
              <FormControl placeholder={`Search ${title}...`} />
              <InputGroup.Append>
                <Button variant={btnColor}>Search</Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
