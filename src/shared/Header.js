import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <Navbar bg="dark" expand="lg" className="w-100 header">
      <Navbar.Brand>
        <NavLink activeClassName="brand-active" exact to="/" id="brand-name">Your Brand Goes Here</NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink exact to="/" className="mr-3" id="home-nav">Home</NavLink>
          <NavLink exact to="/about" className="mr-3" id="about-nav">About</NavLink>
          <NavLink exact to="/profile" className="mr-3" id="profile-nav">Profile</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;