import React from 'react';
import { Carousel } from 'react-bootstrap';
import './carousel.css'
const MyCarousel = () => {
  return (
    <div className='carousel xs={4}'>
      <div className='carousel-destination '>
      <h4>SOME DESTIATION</h4>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="assets/carousel/maldives.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Maldives</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="assets/Carousel/maldives2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Maldives</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="assets/Carousel/bali.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Bali</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>   
    <div className='carousel-hotel xs={4}'>
      <h4>SOME HOTELS</h4>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="assets/carousel/hotelMa.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>OUR HOTEL 5 STARTS IN MARRAKECH</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="assets/carousel/hotelBali.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3>OUR HOTEL 5 STARTS IN BALI</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="assets/carousel/hotelBali2.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>OUR HOTEL 5 STARTS IN BALI</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>   
    </div>
    
    
  );
};

export default MyCarousel;