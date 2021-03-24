import React from 'react'
import Header from '../../components/Header'
import { FaUsers } from 'react-icons/fa'
import { Container, Row, Col, Card, Table } from 'react-bootstrap'
import SearchBar from '../../components/SearchBar';
import TableHead from '../../components/TableHead';
import TableRow from '../../components/TableRow';


export default () =>  {
  return (
    <div>
      <Header title="Users" bgColor="bg-warning" Icon={FaUsers} />
      <SearchBar title="Users" btnColor="warning" />
      <Container>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <h4>Lastest Users</h4>
              </Card.Header>
              <Table striped>
                <TableHead row={["#", "User", "Email"]} />
                <tbody>
                  <TableRow row={["1",	"John Doe",	"jdoe@gmail.com"]} />
                  <TableRow row={["2",	"Harry White",	"harry@yahoo.com"]} />
                  <TableRow row={["3",	"Mary Johnson",	"mary@gmail.com"]} />
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
