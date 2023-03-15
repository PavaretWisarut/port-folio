import React from "react";
import NavBar from "../components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoNodejs } from "react-icons/io";
import { DiJavascript, DiPython, DiReact } from "react-icons/di";
import { SiTypescript, SiPhp, SiMysql, SiPostgresql } from "react-icons/si";
import { BiGitBranch } from "react-icons/bi"
import { VscJson } from "react-icons/vsc";
import { GrGraphQl } from "react-icons/gr";
import "../App.css";

function Skill() {
  return (
    <div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div id="on-top"></div>
      <NavBar />
      <Container className="container">
        <Row>
          <div className="prop">
            <Row>
              <Col style={{ textAlign: "center", marginTop: "3%" }} sm={12}>
                <h3>
                  <i>Expertise</i>
                </h3>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <ul className="Skill_list">
                  <li>
                    <AiFillHtml5 style={{ marginRight: "2%" }} />
                    HTML
                  </li>
                  <li>
                    <IoLogoCss3 style={{ marginRight: "2%" }} />
                    CSS
                  </li>
                  <li>
                    <DiJavascript style={{ marginRight: "2%" }} />
                    Javascript
                  </li>
                  <li>
                    <SiTypescript style={{ marginRight: "2%" }} />
                    Typescript
                  </li>
                  <li>
                    <SiPhp style={{ marginRight: "2%" }} />
                    PHP
                  </li>
                  <li>
                    <DiPython style={{ marginRight: "2%" }} />
                    Python
                  </li>
                  <li>
                    <BiGitBranch style={{ marginRight: "2%" }} />
                    Git
                  </li>
                </ul>
              </Col>
              <Col>
                <ul className="Skill_list">
                <li>
                    <AiFillGithub style={{ marginRight: "2%" }} />
                    GitHub
                  </li>
                  <li>
                    <IoLogoNodejs style={{ marginRight: "2%" }} />
                    ExpressJS
                  </li>
                  <li>
                    <VscJson style={{ marginRight: "2%" }} />
                    REST API
                  </li>
                  <li>
                    <GrGraphQl style={{ marginRight: "2%" }} />
                    GraphQL API
                  </li>
                  <li>
                    <SiMysql style={{ marginRight: "2%" }} />
                    MySQL
                  </li>
                  <li>
                    <SiPostgresql style={{ marginRight: "2%" }} />
                    PostgresQL
                  </li>
                  <li>
                    <DiReact style={{ marginRight: "2%" }} />
                    ReactJS
                  </li>
                </ul>
              </Col>
              <hr></hr>
            </Row>
            <Row>
              <Col style={{ textAlign: "center" }} sm={12}>
                <h3>
                  <i>Hardware skills</i>
                </h3>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <ul className="Skill_list">
                  <li>Operating System</li>
                  <li>Maintenance</li>
                </ul>
              </Col>
              <Col sm={6}>
                <ul className="Skill_list">
                  <li>Internet Connection</li>
                  <li>Computer Drivers</li>
                </ul>
              </Col>
              <hr></hr>
            </Row>
            <Row>
              <Col style={{ textAlign: "center" }} sm={12}>
                <h3>
                  <i>Software skills</i>
                </h3>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <ul className="Skill_list">
                  <li>Visual Studio Code</li>
                  <li>PgAdmin</li>
                  <li>Postman</li>
                  <li>Sony Vegas Pro</li>
                  <li>Microsoft Word</li>
                  
                  
                </ul>
              </Col>
              <Col sm={6}>
                <ul className="Skill_list">
                <li>Microsoft Excel</li>
                <li>Microsoft Powerpoint</li>
                  <li>Canva</li>
                  <li>OBS Studio</li>
                  <li>Photoscape</li>
                </ul>
              </Col>
            </Row>
            {/* <Row>
            <a href="#on-top">กลับด้านบน</a>
            </Row> */}

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

export default Skill;
