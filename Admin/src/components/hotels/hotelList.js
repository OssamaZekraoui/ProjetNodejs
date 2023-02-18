import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Col, Row, Container } from 'react-bootstrap';
import HotelsTab from "./hotels";
import Pagination from 'react-bootstrap/Pagination';


//---------------axios-----------------
const api = axios.create({
    baseURL: "http://localhost:8800/api"
})
function HotelList() {

    //----------------useState--------------------------------
    const [hotels, setHotels] = useState([])
    const [numPage, setnumPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    //--------------------------------------------------------

    //---------useEffect---------
    useEffect(() => {
        const AllHotels = () => {
            api.get('/AllHotels?page=' + numPage + '&limit=12').then(rep => {
                console.log(rep.data.hotels)
                setHotels(rep.data.hotels)
                setTotalPages(rep.data.totalPages)
            }
            )
        }
        AllHotels()
    }, [numPage])




    //------------------pagination-------------------
    let items = [];
    for (let number = 1; number <= totalPages; number++) {
        items.push(
            <Pagination.Item onClick={() => setnumPage(number)} key={number} active={number === numPage} >
                {number}
            </Pagination.Item>
        );
    }
    //------------------------------------------------------
    const HotelListt = hotels.map(e => <HotelsTab key={e._id} id={e._id} title={e.title} city={e.city} offers={e.offers} rating={e.rating} photos={e.photos} prixbas={e.prixbas} description={e.description} ></HotelsTab>)

    return (
        <Container>
            <Row className='text-center'>
                <Col>
                    <h2 style={{ marginTop: '30px', color: 'black', fontSize: '40px' }}>Hotels</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table responsive striped style={{ marginTop: '20px', marginBottom: '100px' }}>
                        <thead>
                            <tr className='text-center'>
                                <th>Title</th>
                                <th>City</th>
                                <th>Photo profil</th>
                                <th>Price</th>
                                <th>Offers</th>
                                <th>Rating</th>
                                <th>Description</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>{HotelListt}</tbody>
                    </Table>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Pagination>{items}</Pagination>
                </Col>
            </Row>
        </Container>
    )
}

export default HotelList