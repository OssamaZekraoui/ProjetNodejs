import React from 'react';
import { Navbar, Button, Form, Container, Nav } from 'react-bootstrap';
import Hotels from '../hotels/hotels'
import './homepage.css'
function Home() {
  return (
    <>
      <div className='home'>
        <Container>
          <Hotels></Hotels>
        </Container>
      </div>

    </>
  );
}

export default Home;