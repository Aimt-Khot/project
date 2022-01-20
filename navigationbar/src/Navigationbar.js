import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,  Navbar, NavDropdown } from 'react-bootstrap';

function NavigationBar() {
return (
  <Navbar bg="light" expand="lg">
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <NavDropdown title="Athleats" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Something</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Sports" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Something</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Brands" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Something</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Nutrition" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Something</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Supplements" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Something</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Training" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Something</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Recovery" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Something</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Mental performance" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Something</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Content" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Something</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
}

export default NavigationBar;
