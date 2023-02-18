import React, { useEffect, useState } from 'react';
import HotelCard from './hotelCard';
import axios from "axios"
import Pagination from 'react-bootstrap/Pagination';
import { Col,Row } from 'react-bootstrap';
//---------axios--------
const api = axios.create({
    baseURL: "http://localhost:8800/api"
})



function HotelList() {

    //----------------useState--------------------------------
    const [hotel, setHotel] = useState([])
    const [numPage, setnumPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    //--------------------------------------------------------

    //---------useEffect---------
    useEffect(() => {
        const AllHotels = () => {
            api.get('/AllHotels?page=' + numPage + '&limit=12').then(rep => {
                console.log(rep.data.hotels)
                setHotel(rep.data.hotels)
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

    const Hotellist = hotel.map(e => <HotelCard key={e._id} id={e._id} image={e.photos} title={e.title} city={e.city} prixbas={e.prixbas}  ></HotelCard>)
    return (
        <section class="wrapper">
            <div class="container-fostrap">
                <div class="content">
                    <div class="container">
                        <Row>
                            {Hotellist}
                        </Row>
                        <Row className="justify-content-center">
                            <Col md={6}>
                                <Pagination>{items}</Pagination>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>

        </section>
    )

}

export default HotelList