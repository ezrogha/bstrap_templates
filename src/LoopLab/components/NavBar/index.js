import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import styles from'./index.module.css'

export default function index() {
  return (
    <Navbar id={styles.looplab_navbar} bg="dark" expand="sm" className="navbar-dark fixed-top">
      <Container>
        <Navbar.Brand href="#home">LoopLAB</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <AnchorLink href="#home" className="nav-link">Home</AnchorLink>
            <AnchorLink href="#explore" className="nav-link">Explore</AnchorLink>
            <AnchorLink href="#create" className="nav-link">Create</AnchorLink>
            <AnchorLink href="#share" className="nav-link">Share</AnchorLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
