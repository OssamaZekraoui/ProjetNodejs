import React from 'react';
import { Card, Col } from 'react-bootstrap';

function destinationCard(props) {
  return (
      <Col xs={4} style={{ padding: "1rem" , width: "25rem" , marginLeft: "15px"}}>
      <Card className="mb-3 shadow" >
      <div className='card'>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.destination}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
          <button className='btn btn-dark' type="button">Hotels</button>
        </Card.Body>
        </div>
      </Card>
    </Col>
    
  );
}

export default destinationCard;