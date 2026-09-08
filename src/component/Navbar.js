import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../image/logo.png";
import NavItems from "./Navitem";

export default function NavigationBar() {
  return (
    <>
      <Navbar expand="xl" className="headerback" variant="dark" sticky="top" collapseOnSelect>
        <Container fluid="xl">
          {/* Logo */}
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Navbar.Brand>

          {/* Toggle Button */}
          <Navbar.Toggle aria-controls="nile-mobile-menu" aria-label="Open navigation menu" />

          {/* Navbar Items */}
          <Navbar.Offcanvas id="nile-mobile-menu" aria-labelledby="nile-mobile-menu-title" placement="end" responsive="xl">
            <Offcanvas.Header closeButton closeVariant="white">
              <Offcanvas.Title id="nile-mobile-menu-title">
                <img src={logo} alt="NILE Hospitality" className="drawer-logo" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="ms-auto">
                {NavItems.map((item) => (
                  <Nav.Link
                    as={NavLink}
                    to={item.path}
                    key={item.path}
                    end={item.path === "/"}
                    className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
                  >
                    {item.Name}
                  </Nav.Link>
                ))}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
