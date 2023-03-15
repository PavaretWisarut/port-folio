import React from "react";
import NavBar from "../components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Navbar, Card , Button } from "react-bootstrap";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
// import { IoLogoCss3, IoLogoNodejs } from "react-icons/io";
// import { DiJavascript, DiPython, DiReact } from "react-icons/di";
// import { SiTypescript, SiPhp, SiMysql, SiPostgresql } from "react-icons/si";
// import { VscJson } from "react-icons/vsc";
// import { GrGraphQl } from "react-icons/gr";
import mcd from "../assets/McDonalds-logo.png";
import satit from "../assets/satit.png";
import interset from "../assets/new-site.jpg";
import "../App.css";
function Experience() {
  return (
    <div>
      <div id="on-top"></div>
      <NavBar />
      <Container className="container">
        <Row>
          <div className="prop">
            <Row>
              <Col style={{ textAlign: "center", marginTop: "3%" }} sm={12}>
                <h3>
                  <i>My Work Experience</i>
                </h3>
                <hr></hr>
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
              <Card style={{ width: "60%" , margin:'auto'}} >
                <Card.Img variant="top" src={mcd} style={{marginTop:"5%"}}/>
                <Card.Body>
                  <Card.Title style={{textAlign:'center'}}><b>MC THAI COMPANY LIMITED</b></Card.Title>
                  <Card.Text>
                  <b>1 March 2016 - 31 June 2022 </b><br></br>
                  <b>Position : </b>Shop assistant
                  <ul className="position_list">
                    <li>Receive a list of customer orders and deliver customer orders.</li>
                    <li>Make food and drink menus according to the orders received.</li>
                  </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
            </Row>

            <p></p>
            <Row>
              <Col sm={12}>
              <Card style={{ width: "60%" , margin:'auto'}} >
                <Card.Img variant="top" src={satit} style={{marginTop:"5%" , width:"50%" , marginLeft:"25%"}}/>
                <Card.Body>
                  <Card.Title style={{textAlign:'center'}}><b >Chandrakasem Rajabhat University Demostration School</b></Card.Title>
                  <Card.Text>
                  <b>15 August 2022 - 22 September 2022 </b><br></br>
                  <b>Internship 1 month</b><br></br>
                  <b>Position : </b>Information Technology Assistant
                  <ul className="position_list">
                    <li>Make stickers, to put on the executive rooms and so on.  </li>
                    <li>Make a lan system in the computer room.</li>
                    <li>Make a student ID card</li>
                    <li>Maintain the computer As assigned.</li>
                  </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
            </Row>

            <p></p>
            <Row>
              <Col sm={12}>
              <Card style={{ width: "60%" , margin:'auto'}} >
                <Card.Img variant="top" src={interset} style={{marginTop:"5%" , width:"50%" , marginLeft:"25%"}}/>
                <Card.Body>
                  <Card.Title style={{textAlign:'center'}}><b >InterSET. Research and Solution.</b></Card.Title>
                  <Card.Text>
                  <b>1 December 2022 - 31 March 2023</b><br></br>
                  <b>Internship 4 months</b><br></br>
                  <b>Position : </b>Backend Developer
                  <ul className="position_list">
                    <li>Create a REST API to connect to the Front End for the Test Management Tools system. </li>
                    <li>Create a GraphQL API to connect to the front end for HR Connext.</li>
                  </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
            </Row>
            <Row>
            <a href="#on-top" className="button-27">Back to Top</a>
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

export default Experience;
