import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const handleSignOut = () => {
    localStorage.removeItem("/auth/info");
    navigate("/");
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Tic-ket Scanner</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="nav-link" to="/scan-qr">
                Scan Qr
              </NavLink>
              <NavLink className="nav-link" to="/check-number">
                Check Ticket Number
              </NavLink>
              <div className="nav-link" onClick={() => handleSignOut()}>
                Sign out
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default Header;
