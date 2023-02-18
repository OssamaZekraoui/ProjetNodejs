import React from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen,faBlenderPhone,faMapLocation } from '@fortawesome/free-solid-svg-icons'
import './footer.css'

function Footer(){
  return (
    <footer className="bg-dark" variant="dark">
    <Container>
      <Row>
        <Col md={4}>
          <h5>Contact Us</h5>
          <ul className="list-unstyled">
            <li><FontAwesomeIcon icon={faEnvelopeOpen} />  travelnow@gmail.com</li>
            <li><FontAwesomeIcon icon={faBlenderPhone} />  +212 767423358</li>
            <li><FontAwesomeIcon icon={faMapLocation} />   123 Main St, Anytown USA</li>
          </ul>
        </Col>
        <Col md={4}>
          <h5>About Us</h5>
          <ul className="list-unstyled">
            <li><a href="#">Our details</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Our Partners</a></li>
          </ul>
        </Col>
        <Col md={4}>
          <h5>Social Media</h5>
          <ul className="list-unstyled">
            <li><a href="#"><FontAwesomeIcon icon={faEnvelopeOpen} /> Facebook</a></li>
            <li><a href="#"><FontAwesomeIcon icon={faEnvelopeOpen} /> Instagram</a></li>
            <li><a href="#"><FontAwesomeIcon icon={faEnvelopeOpen} /> Twitter</a></li>
          </ul>
        </Col>
      </Row>
      <hr />
      <Row className="text-center">
        <Col>
          <p>Copyright &copy; {new Date().getFullYear()} - <i>TRAVEL NOW</i></p>
        </Col>
      </Row>
    </Container>
  </footer>
)
}

export default Footer;