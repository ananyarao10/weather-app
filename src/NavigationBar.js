import React from 'react';
import './NavigationBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavigationBar() {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="#">Meeti</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">Meet</Nav.Link>
          <Nav.Link href="#">Faq</Nav.Link>
          <Nav.Link href="#">How it works</Nav.Link>
          <Nav.Link href="#">Sign in</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
