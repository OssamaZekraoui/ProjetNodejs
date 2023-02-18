import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from '../homepage/home'
import Users from '../users/users'
import Hotels from '../hotels/hotelList'
import Ajout from '../formAjout/form'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar, Button, Form } from 'react-bootstrap';
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faBlenderPhone, faMapLocation,faHotel, faPerson, faComputer, faPen } from '@fortawesome/free-solid-svg-icons'

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
          <Link to="/ajout">
              <button className="btn btn-dark" type="button">
                <FontAwesomeIcon icon={faPen} />  Add Hotel
              </button>
            </Link>
            <Link to="/hotels">
              <button className="btn btn-dark me-md-2" type="button">
                <FontAwesomeIcon icon={faHotel} /> Hotels
              </button>
            </Link>
            <Link to="/users">
              <button className="btn btn-dark" type="button">
                <FontAwesomeIcon icon={faPerson} /> Users
              </button>
            </Link>
            <Link to="/">
              <button className="btn btn-dark" type="button">
                <FontAwesomeIcon icon={faComputer} /> Reservations
              </button>
            </Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/users' element={<Users />}></Route>
        <Route path='/ajout' element={<Ajout />}></Route>
        <Route path='/hotels' element={<Hotels />}></Route>



      </Routes>
    </>
  );
}

export default Header;