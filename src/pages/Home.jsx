import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import NavBar from "../components/NavBar";
import { BsFacebook, BsInstagram, BsFillPeopleFill } from "react-icons/bs";
import { AiFillGithub, AiTwotoneMail, AiTwotonePhone } from "react-icons/ai";
import Me from "../assets/profile.jpg";
import "../App.css";
function Home() {
  return (
    <div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <NavBar />
      <Container className="container">
        <Row>
          <div className="prop">
            <Row>
              <Col sm={4}>
                <img
                  src={Me}
                  alt="profile"
                  width="70%"
                  height="70%"
                  style={{ marginTop: "30%", marginLeft: "20%" }}
                ></img>
              </Col>
              <Col style={{ textAlign: "center", marginTop: "5%" }} sm={6}>
                <h3>I'm Pavaret Wisarut</h3>
                <h5>Programmer , Backend Developer</h5>
                <hr></hr>
                <h6>
                  <b>
                    <BsFillPeopleFill
                      style={{ marginRight: "1%", marginBottom: "1%" }}
                    />
                    Age
                  </b>{" "}
                  : 22 Years Old
                </h6>
                <hr></hr>
                <h6>
                  <b>
                    <AiTwotoneMail
                      style={{ marginRight: "1%", marginBottom: "0.5%" }}
                    />
                    Email
                  </b>
                  : beerkungz1230@gmail.com
                </h6>
                <hr></hr>
                <h6>
                  <b>
                    <AiFillGithub
                      style={{ marginRight: "1%", marginBottom: "0.5%" }}
                    />
                    Github
                  </b>{" "}
                  : https://github.com/PavaretWisarut
                </h6>
                <hr></hr>
                <h6>
                  <b>
                    <AiTwotonePhone
                      style={{ marginRight: "1%", marginBottom: "0.5%" }}
                    />
                    Phone
                  </b>{" "}
                  : 094-251-3429
                </h6>
              </Col>
            </Row>
            <p></p>
            <Row style={{ marginTop: "10%" }}>
              <Navbar
                style={{ backgroundColor: "#F4656D", borderRadius: "20px" }}
              >
                <Navbar.Brand
                  style={{ marginLeft: "2%" }}
                  href="https://www.facebook.com/mixcer.rock/"
                  target="_blank"
                >
                  <BsFacebook />
                </Navbar.Brand>
                <Navbar.Brand
                  href="https://www.instagram.com/beer_pwr/"
                  target="_blank"
                >
                  <BsInstagram />
                </Navbar.Brand>
                <Navbar.Brand
                  href="https://github.com/PavaretWisarut"
                  target="_blank"
                >
                  <AiFillGithub />
                </Navbar.Brand>
              </Navbar>
            </Row>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
