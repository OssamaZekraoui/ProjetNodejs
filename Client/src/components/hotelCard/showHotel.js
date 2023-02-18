import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link, Route, Routes } from 'react-router-dom';
import Payement from '../payement/formpayement';
import './showhotel.css'

import { useParams } from 'react-router-dom';

//---------------axios-----------------
const api = axios.create({
  baseURL: "http://localhost:8800/api"
})


function ShowHotel() {

  //------------Params-------------------
  const params = useParams();
  const id = params.id
  //---------------------------------------

  const [hotel, setHotel] = useState([])

  //---------useEffect---------
  useEffect(() => {
    const OneHotel = () => {
      api.get(`/OneHotel/${id}`).then(rep => {
        console.log(rep.data.hotel)
        setHotel(rep.data.hotel)
      }
      )
    }
    OneHotel()
  }, [id])


  return (
<div style={{marginLeft:'0px',paddingLeft:'0px',backgroundColor:'rgb(35, 35, 35)'}}>
      <Container className='showhotel'>
        <Row>
          <Col><h1 className="title" style={{ paddingTop: '2rem' }}>{hotel.title}</h1></Col>
        </Row>
        <Row>
          <Col>
            <Image src={"http://localhost:8800/images/" + hotel.photos} md={4} sm={12} fluid style={{ paddingTop: '2rem' }}></Image>
          </Col>
        </Row>
        <Row>
          <Col>
            <p style={{ color: "gray" }}>Rating : <span style={{ color: 'yellow' }}>{hotel.rating} </span> stars</p> 
            <p >{hotel.description}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 style={{ color: 'white' }}>What this place offers!!</h2>
            <p>{hotel.offers}</p>
          </Col>
          <Col>
            <Link to='/payement'>
              <Button variant="light">Reserve</Button>
            </Link>
          </Col>

        </Row>
        <Routes>
        <Route path='/payement' element={<Payement />} />
      </Routes>
      </Container>
      </div>
  );
}

export default ShowHotel;
