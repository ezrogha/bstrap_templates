import React from 'react'
import Header from '../../components/Header'
import { FaFolder } from 'react-icons/fa'
import { Container, Row, Col, Card, Table } from 'react-bootstrap'
import SearchBar from '../../components/SearchBar';
import TableHead from '../../components/TableHead';
import TableRow from '../../components/TableRow';


export default () =>  {
  return (
    <div>
      <Header title="Category" bgColor="bg-success" Icon={FaFolder} />
      <SearchBar title="Category" btnColor="success" />
      <Container>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <h4>Lastest Categories</h4>
              </Card.Header>
              <Table striped>
                <TableHead row={["#", "Title", "Date"]} />
                <tbody>
                  <TableRow row={["1",	"Web Development", "May 10 2018"]} />
                  <TableRow row={["2",	"Tech Gadgets",	"May 11 2018"]} />
                  <TableRow row={["3",	"Business",	"May 13 2018"]} />
                  <TableRow row={["4",	"Health & Wellness",	"May 15 2018"]} />
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
