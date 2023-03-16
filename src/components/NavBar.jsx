import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../App.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Navbar style={{ backgroundColor: "#75464A" }} variant="dark">
        <Container>
          <Navbar.Brand href="/">My Portfolio</Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link>
              <Link className="navigators" to="/skill">Skill</Link>
            </Nav.Link>

            <Nav.Link>
              <Link className="navigators" to="/experience">Experience</Link>
            </Nav.Link>

            <Nav.Link>
              <Link className="navigators" to="/contact">Contact</Link>
            </Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
