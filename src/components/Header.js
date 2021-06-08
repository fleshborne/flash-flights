import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.jpg'


export default function Header() {
      return (
    <Navbar expand='lg' bg="dark" variant="dark" background-color="grey">
    <Navbar.Brand>
      <img
        alt="Flash Logo"
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      <b text-align='center' className="headerNav">Flash Flights</b>
    </Navbar.Brand>
  </Navbar>
      );
};
