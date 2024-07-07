import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  title: 'Example/Navigation',
  component: Navbar,
};

const Template = (args) => (
  <Navbar bg={args.bg} variant={args.variant} expand="lg">
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export const Default = Template.bind({});
Default.args = {
  bg: 'light',
  variant: 'light',
};

export const Dark = Template.bind({});
Dark.args = {
  bg: 'dark',
  variant: 'dark',
};
