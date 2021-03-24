import React from "react";
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container } from "react-bootstrap";

import styles from './index.module.scss';

export default function index() {
  return (
    <Navbar bg="dark" expand="sm" className="looplab_navbar navbar-dark">
      <Container>
        <Link to="/grayson/" className="navbar-brand">Grayson</Link>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav id={styles.navbarList} className="ml-auto">
            <Link to="/grayson/" className="nav-link">Home</Link>
            <Link to="/grayson/about" className="nav-link">About Us</Link>
            <Link to="/grayson/services" className="nav-link">Services</Link>
            <Link to="/grayson/blog" className="nav-link">Blog</Link>
            <Link to="/grayson/contact" className="nav-link">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
