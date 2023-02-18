import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from '../homepage/home'
import Login from '../login/login'
import Registration from '../register/register'
import Show from '../hotelCard/showHotel'
import Payement from '../payement/formpayement';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar, Button, Form } from 'react-bootstrap';
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faBlenderPhone, faMapLocation,faHotel } from '@fortawesome/free-solid-svg-icons'
function Header() {

 
  return (
    <>
      <Navbar expand="md" className="navbar navbar-dark menu" bg="dark" sticky="top">
    <Container>
      <Navbar.Brand as={Link} to="/">
        <span style={{ fontFamily: 'sans-serif', fontSize: '20px', fontWeight: 'bold' }} className="travelnow">
          TRAVEL NOW
        </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-between w-100 align-items-center">
          <div className="d-grid gap-2 d-md-flex justify-content-md-end button ms-auto">
            <Link to="/login">
              <button className="btn btn-dark me-md-2" type="button">
                <FontAwesomeIcon icon={faEnvelopeOpen} /> LOGIN
              </button>
            </Link>
            <Link to="/registration">
              <button className="btn btn-dark" type="button">
                <FontAwesomeIcon icon={faHotel} /> SIGN UP
              </button>
            </Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login/*' element={<Login />}></Route>
        <Route path='/registration/*' element={<Registration />}></Route>
        <Route path='/:id' element={<Show />}></Route>
        <Route path='/payement' element={<Payement />}></Route>
      </Routes>
    </>
  );
}

export default Header;