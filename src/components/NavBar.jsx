import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../App.css";

function NavBar() {
  return (
    <div>
      <Navbar style={{backgroundColor:'#75464A'}} variant="dark">
        <Container>
          <Navbar.Brand href="/">My Portfolio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/skill">Skill</Nav.Link>
            <Nav.Link href="/experience">Experience</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;