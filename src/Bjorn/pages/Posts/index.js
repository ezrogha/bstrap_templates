import React from 'react'
import Header from '../../components/Header'
import { FaPencilAlt } from 'react-icons/fa'
import { Container, Row, Col, Card, Table, Pagination } from 'react-bootstrap'
import SearchBar from '../../components/SearchBar';
import TableHead from '../../components/TableHead';
import TableRow from '../../components/TableRow';


export default () =>  {
  return (
    <div>
      <Header title="Posts" bgColor="bg-primary" Icon={FaPencilAlt} />
      <SearchBar title="Posts" btnColor="primary" />
      <Container>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <h4>Lastest Posts</h4>
              </Card.Header>
              <Table striped>
                <TableHead row={["#", "Title", "Category", "Date"]} />
                <tbody>
                  <TableRow row={["1",	"Post One",	"Web Development",	"May 10 2020"]} />
                  <TableRow row={["2",	"Post Two",	"Tech Gadgets",	"May 11 2020"]} />
                  <TableRow row={["3", "Post Three", "Web Development", "May 13 2020"]} />
                  <TableRow row={["4",	"Post Four",	"Business",	"May 15 2020"]} />
                  <TableRow row={["5",	"Post Five",	"Web Development",	"May 17 2020"]} />
                  <TableRow row={["6",	"Post Six",	"Health & Wellness",	"May 20 2020"]} />
                </tbody>
              </Table>
              <Pagination className="ml-4 mt-4">
                <Pagination.Item>Prev</Pagination.Item>
                <Pagination.Item active>1</Pagination.Item>
                <Pagination.Item>2</Pagination.Item>
                <Pagination.Item>3</Pagination.Item>
                <Pagination.Item>Next</Pagination.Item>
              </Pagination>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
