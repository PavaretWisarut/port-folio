import React, { useState } from "react";
import NavBar from "../components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Navbar, Form, Button } from "react-bootstrap";
import { BsFacebook, BsInstagram, BsFillPeopleFill } from "react-icons/bs";
import { AiFillGithub, AiTwotoneMail, AiTwotonePhone  } from "react-icons/ai";
import QR from "../assets/qr.jpg";
import "../App.css";
function Contact() {
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [message , setMessage] = useState('')

  const changeName = (e) =>{
    setName(e.target.value)
  }
  const changeEmail = (e) =>{
    setEmail(e.target.value)
  }
  const changeMessage = (e) =>{
    setMessage(e.target.value)
  }
  const page = (e) => {
    let items = []
    e.preventDefault();
    items.push(name , email , message)
    console.log(items);
}
  return (
    <div>
      <NavBar />
      <Container>
        <form >
          <Row>
            <div className="prop">
              <Col style={{ textAlign: "center", marginTop: "3%" }} sm={12}>
                <h3><i>Contact Me</i></h3>
                <hr></hr>
              </Col>

              <Row>
                {/* <Col sm={4}>
                <img src={Me} alt="profile" width="70%" height="70%" style={{marginTop:"30%" , marginLeft:"20%"}}></img>
              </Col> */}
                <Col style={{ textAlign: "left" }} sm={6}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Mr.Samson Sukdee"
                      onChange={changeName}
                      value={name}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="samson.sd@gmail.com"
                      onChange={changeEmail}
                      value={email}
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} onChange={changeMessage} value={message} />
                  </Form.Group>
                </Col>

                <Col style={{ textAlign: "center" }} sm={6}>
                  <div className="contact-box">
                    <h6 style={{marginTop:'1%' , paddingTop:'1%'}}><b>Contact Me For Work</b></h6>
                    <h6>Email : pavaret.wisarut@gmail.com</h6>
                    <hr></hr>
                    <h6><b>My line QR code</b></h6>
                    <img src={QR} width="40%" height="50%" alt="line QR"></img>
                  </div>
                </Col>
              </Row>
              <Row>
                <p></p>
                <Col sm={6}>
                  <Button
                    style={{ width: "100%" }}
                    variant="dark"
                    type="submit"
                    onClick={page}
                  >
                    Send Contact
                  </Button>
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
        </form>
      </Container>
    </div>
  );
}

export default Contact;
