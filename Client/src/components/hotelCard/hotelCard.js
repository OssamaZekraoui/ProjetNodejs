import React, { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Card, Col } from 'react-bootstrap';
import ShowHotel from './showHotel'
import './HotelCard.css'


function HotelCard(props) {
  return (
    <>
      <Col xs={4} style={{ paddingBottom: "1.5rem", width: "25rem", paddingTop: "1.5rem", marginLeft: '0px', marginRight: '0px' }}>
        <Card className='cardd' style={{ border: '0px' }}>
          <div className='card' style={{ border: '0px' }}>
            <Card.Img variant="top" src={"http://localhost:8800/images/"+props.image} />
            <Card.Body className='cardbody' style={{ color: 'white', border: '0px' }}>
              <Card.Title>{props.title}, {props.city}</Card.Title>
              <Card.Text>
                {props.prixbas}$ night
              </Card.Text>
              <Link  to={`/${props.id}`} > <button className='btn btn-dark' type="button" style={{ backgroundColor: '#333', border: '0px' }}>Show Hotel</button></Link>
            </Card.Body>
          </div>
        </Card>
      </Col>
      <Routes>
        <Route path='/:id' element={<ShowHotel />}></Route>
      </Routes>
    </>
  );
}

export default HotelCard;

//  <Route path='/hotel/:id' element={<ShowHotel />}></Route>

// <Link to={`/hotel/${props.id}`}> <button className='btn btn-dark' type="button" style={{ backgroundColor: '#333', border: '0px' }}>Show Hotel</button></Link>
