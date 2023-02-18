import React, { useState } from 'react';
import { Form, FormControl, Button, Container } from 'react-bootstrap';
import bgimg from './bgimage.jpg'


function SearchForm() {
  const [destination, setDestination] = useState();
  const [date, setDate] = useState();
  const [rooms, setRooms] = useState();
  function handleSearch() {
    console.log(`Destination: ${destination}, Date: ${date}, Rooms: ${rooms}`);
  }
  return (
    <Container style={{
      marginTop: '20px', marginBottom: '40px', backgroundImage: `url(${bgimg})`,
      opacity: 0.9, backgroundSize: 'cover', backgroundPosition: 'center',width:'1366px', height:'600px',
      marginLeft:'0px',marginRight:'0px',paddingLeft:'0px',paddingRight:'0px'
    }}>
      <h1 style={{ fontSize:'65px',fontFamily:'inherit', paddingTop:'110px',textAlign: 'center', color: 'white'
      ,border:'50px',borderColor:'black' }}>FIND NEXT PLACE TO VISIT</h1>
      <h2 style={{ textAlign: 'center', color: 'white' }}>Discover amazing places at exclusive deals</h2>
      <div className="d-flex" style={{ paddingTop:'50px', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
        <FormControl
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={e => setDestination(e.target.value)}
          className="mb-2"
          style={{ height:'50px',width: '20%', marginLeft: '10px',fontFamily:'revert' }}
        />
        <FormControl
          type="text"
          placeholder="Duration"
          value={date}
          onChange={e => setDate(e.target.value)}
          className="mb-2"
          style={{ height:'50px', width: '20%', marginLeft: '10px',fontFamily:'revert'  }}
        />
        <FormControl
          type="number"
          placeholder="Rooms"
          value={rooms}
          onChange={e => setRooms(e.target.value)}
          className="mb-1"
          style={{ height:'50px',width: '20%', marginLeft: '10px' }}
        />
        <Button onclick={handleSearch()} className='mb-2' style={{ border:'none', height:'50px',backgroundColor: 'orange', marginLeft: '10px',fontFamily:'revert',color:'white'}}>Search</Button>
      </div>
    </Container>
  );
}

export default SearchForm;
