import React from 'react'
import { Row} from 'react-bootstrap';
import DestinationCard from './destinationCard';
function DestinationList() {
    const Destination = [
        {  image:"assets/carousel/maldives.jpg" ,destination:"MALDIVES ", description:"Good destination with good prices"},
        {  image:"assets/carousel/maldives2.jpg", destination:"MALDIVES ", description:'Good destination with good prices'},
        {  image:"assets/carousel/Bali.jpg", destination:"BALI, INDONESIA ", description:'Good destination with good prices'},
        {  image:"assets/carousel/hotelBali.jpg", destination:"BALI, INDONESIA ", description:'Good destination with good prices'},
        {  image:"assets/carousel/hotelBali2.jpg", destination:"BALI, INDONESIA ", description:'Good destination with good prices'},
        {  image:"assets/carousel/hotelMa.jpg", destination:"MARRAKECH, MOROCCO ", description:'Good destination with good prices'},

        //////////////////////////////// DES COPIES //////////////////////////////////

        {  image:"assets/carousel/maldives.jpg" ,destination:"MALDIVES ", description:"Good destination with good prices"},
        {  image:"assets/carousel/maldives2.jpg", destination:"MALDIVES ", description:'Good destination with good prices'},
        {  image:"assets/carousel/Bali.jpg", destination:"BALI, INDONESIA ", description:'Good destination with good prices'},
        {  image:"assets/carousel/hotelBali.jpg", destination:"BALI, INDONESIA ", description:'Good destination with good prices'},
        {  image:"assets/carousel/hotelBali2.jpg", destination:"BALI, INDONESIA ", description:'Good destination with good prices'},
        {  image:"assets/carousel/hotelMa.jpg", destination:"MARRAKECH, MOROCCO ", description:'Good destination with good prices'},
    ];
    const Destinationlist = Destination.map(e => <DestinationCard image={e.image} title={e.title} destination={e.destination} price={e.price}  ></DestinationCard>)
    return (
        <section class="wrapper">
            <div class="container-fostrap">
                <div class="content">
                    <div class="container">
                        <Row>
                            {Destinationlist}
                        </Row>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default DestinationList