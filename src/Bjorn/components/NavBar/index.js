import React from "react";
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavLink, Container, Dropdown } from "react-bootstrap";
import { FaUser, FaUserCircle, FaCog, FaUserTimes } from 'react-icons/fa'


export default function index() {
  return (
    <Navbar bg="dark" expand="sm" className="navbar-dark p-0">
      <Container>
        <Link to="/bjorn/dashboard" className="navbar-brand">Bjorn</Link>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav>
            <Link to="/bjorn/dashboard" className="nav-link px-3">
              Dashboard</Link>
            <Link to="/bjorn/posts" className="nav-link px-3">
              Posts
            </Link>
            <Link to="/bjorn/categories" className="nav-link px-3">
              Categories
            </Link>
            <Link to="/bjorn/users" className="nav-link px-3">
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
                <Link to="/bjorn/profile" className="dropdown-item">
                  <FaUserCircle fontSize="20" /> Profile
                </Link>
                <Dropdown.Item href="#/action-2">
                  <FaCog /> Settings
                </Dropdown.Item>                
              </Dropdown.Menu>
            </Dropdown>
            <Link to="/bjorn/" className="px-3 nav-link">
              <FaUserTimes fontSize="20" /> Logout
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
