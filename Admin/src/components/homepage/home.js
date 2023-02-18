import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import img from './image.png';

function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <h2 className="text-center my-3">Hello Admin!</h2>
        </Col>
</Row>
<Row className="d-flex justify-content-center align-items-center flex-column">
        <Col md={6}>
          <Image src={img} fluid />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
