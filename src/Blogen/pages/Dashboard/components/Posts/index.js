import React from 'react'
import { Container, Row, Col, Card, Table } from 'react-bootstrap'
import TableHead from '../../../../components/TableHead'
import TableRow from '../../../../components/TableRow'
import SideCard from './components/SideCard'
import { FaPencilAlt, FaFolder, FaUsers } from 'react-icons/fa'

export default () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md="9">
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
            </Card>
          </Col>
          <Col md="3">
            <SideCard title="Posts" Icon={FaPencilAlt} bgColor="bg-primary" count="6" />
            <SideCard title="Categories" Icon={FaFolder} bgColor="bg-success" count="4" />
            <SideCard title="Users" Icon={FaUsers} bgColor="bg-warning" count="4" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
