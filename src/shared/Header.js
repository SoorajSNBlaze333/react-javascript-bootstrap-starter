import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [])

  if (loading) {
    return <div className="w-100">Loading Header...</div>
  }

  return (
    <Navbar bg="light" expand="lg" className="w-100 header">
      <Navbar.Brand>
        <NavLink exact to="/">Your Brand Goes Here</NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink exact to="/" className="mr-3">Home</NavLink>
          <NavLink exact to="/about" className="mr-3">About</NavLink>
          <NavLink exact to="/profile" className="mr-3">Profile</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;