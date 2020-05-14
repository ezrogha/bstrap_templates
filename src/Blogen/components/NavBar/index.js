import React from "react";
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavLink, Container, Dropdown } from "react-bootstrap";
import { FaUser, FaUserCircle, FaCog, FaUserTimes } from 'react-icons/fa'


export default function index() {
  return (
    <Navbar bg="dark" expand="sm" className="navbar-dark p-0">
      <Container>
        <Link to="/blogen/dashboard" className="navbar-brand">Blogen</Link>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav>
            <Link to="/blogen/dashboard" className="nav-link px-3">
              Dashboard</Link>
            <Link to="/blogen/posts" className="nav-link px-3">
              Posts
            </Link>
            <Link to="/blogen/categories" className="nav-link px-3">
              Categories
            </Link>
            <Link to="/blogen/users" className="nav-link px-3">
              Users
            </Link>
          </Nav>
          <hr />
          <Nav className="ml-auto">
            <Dropdown>
              <Dropdown.Toggle as={NavLink}>
                <FaUser /> Welcome Rogha
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Link to="/blogen/profile" className="dropdown-item">
                  <FaUserCircle fontSize="20" /> Profile
                </Link>
                <Dropdown.Item href="#/action-2">
                  <FaCog /> Settings
                </Dropdown.Item>                
              </Dropdown.Menu>
            </Dropdown>
            <Link to="/blogen/" className="px-3 nav-link">
              <FaUserTimes fontSize="20" /> Logout
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
