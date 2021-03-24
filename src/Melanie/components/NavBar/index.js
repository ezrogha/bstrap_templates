import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import AnchorLink from 'react-anchor-link-smooth-scroll'

import styles from './index.module.scss'

import Logo from '../../img/mlogo.png'

export default ({ getNavRef }) => {

  return (
    <Navbar id={styles.navbar} ref={getNavRef} expand="md" className="looplab_navbar navbar-light fixed-top">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="logo" width="50" height="50" className="mr-2" />
          <h3 className="d-inline align-middle">Melanie</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto" id={styles.mlauto}>
            <AnchorLink href="#showcase" className="nav-link navitem">Home</AnchorLink>
            <AnchorLink href="#about" className="nav-link">About</AnchorLink>
            <AnchorLink href="#authors" className="nav-link">Meet The Authors</AnchorLink>
            <AnchorLink href="#contact" className="nav-link">Contact</AnchorLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
