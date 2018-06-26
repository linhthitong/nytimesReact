import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navigation = props => (

<Navbar>
  <Navbar.Header>
    <Navbar.Brand>
    <Link to="/">
      APP NAME
    </Link>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav pullRight>
      <NavItem className={
            window.location.pathname === "/" ||
            window.location.pathname === "/home"
              ? "nav-item active"
              : "nav-item"
          } >
        <Link to="/home" className="nav-link">
            Home
        </Link>
      </NavItem>
      <NavItem  className={
            window.location.pathname === "/saved"
              ? "nav-item active"
              : "nav-item"
          }>
        <Link to="/saved" className="nav-link">
            Saved Articles
        </Link>
      </NavItem>
    </Nav>
</Navbar>
);

export default Navigation;





