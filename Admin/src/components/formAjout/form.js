import React from "react";
import { useForm } from 'react-hook-form';
import { Container, Row, Col, Form, FormControl, FormGroup, FormLabel, Button } from "react-bootstrap";
import './form.css'
import axios from "axios";

//---------------axios-----------------
const api = axios.create({
    baseURL: "http://localhost:8800/api"
})

function FormAjout() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    //--------------------------------------

    const submitHotel = async (data) => {
        console.log(data)
        const hot = {
            pic: data.pic[0],
            title: data.title,
            description: data.description,
            prixbas: data.prixbas,
            city: data.city,
            rating: data.rating,
            offers:data.offers
        }
        const rep = await api.post('/AjoutHotel', hot,{headers: {'Content-Type': 'multipart/form-data'}})
        console.log(rep)
        alert("Hotel has been created successfully")
        window.location.reload(); // rafraîchir la page

    }

    //----------------------------------------------


    return (
        <div style={{ paddingTop: '20px', paddingBottom: '20px' }}>
            <Container >
                <Row className="d-flex justify-content-center">
                    <Col xs={12} sm={12} md={8} lg={6}>
                        <h2 style={{ color: 'black', textAlign: 'center' }}>Add Hotel</h2>
                        <Form onSubmit={handleSubmit(submitHotel)}>
                            <FormGroup>
                                <FormLabel style={{ fontWeight: 'bold', marginTop: '10px', color: 'black' }}>Title</FormLabel>
                                <FormControl
                                    type="text"
                                    placeholder="Enter Title"
                                    style={{ fontWeight: 'bold'}}
                                    {...register("title", {
                                        required: true,
                                        minLength: 3
                                    })}
                                />
                                {errors.title && <p style={{ color: 'red' }}>Title is required & at least 3 chars</p>}
                            </FormGroup>
                            <FormGroup>
                                <FormLabel style={{ fontWeight: 'bold', marginTop: '10px', color: 'black' }}>City</FormLabel>
                                <FormControl
                                    type="text"
                                    placeholder="Enter City"
                                    style={{ fontWeight: 'bold'}}
                                    {...register("city", {
                                        required: true
                                    })}
                                />
                                {errors.city && <p style={{ color: 'red' }}>City is required</p>}
                            </FormGroup>
                            <FormGroup>
                                <FormLabel style={{ fontWeight: 'bold', marginTop: '10px', color: 'black' }}>Image</FormLabel>
                                <FormControl
                                    type="file"
                                    multiple="true"
                                    placeholder="Choose photos"
                                    style={{ fontWeight: 'bold'}}
                                    {...register("pic", {
                                        required: true
                                    })}
                                />
                                {errors.photos && <p style={{ color: 'red' }}>Photo is required</p>}
                            </FormGroup>
                            <FormGroup>
                                <FormLabel style={{ fontWeight: 'bold', marginTop: '10px', color: 'black' }}>Price</FormLabel>
                                <FormControl
                                    type="number"
                                    defaultValue={0}
                                    placeholder="Enter Price"
                                    style={{ fontWeight: 'bold' }}
                                    {...register("prixbas", {
                                        required: true
                                    })}
                                />
                                {errors.prixbas && <p style={{ color: 'red' }}>Price is required</p>}
                            </FormGroup>
                            <FormGroup>
                                <FormLabel style={{ fontWeight: 'bold', marginTop: '10px', color: 'black' }}>Offers</FormLabel>
                                <FormControl
                                    type="text"
                                    placeholder="Enter Offers"
                                    style={{ fontWeight: 'bold' }}
                                    {...register("offers", {
                                        required: true
                                    })}
                                />
                                {errors.prixbas && <p style={{ color: 'red' }}>Offers is required</p>}
                            </FormGroup>
                            <FormGroup>
                                <FormLabel style={{ fontWeight: 'bold', marginTop: '10px', color: 'black' }}>Rating</FormLabel>
                                <FormControl
                                    type="number"
                                    placeholder="Enter Rating"
                                    style={{ fontWeight: 'bold' }}
                                    {...register("rating", {
                                        required: false
                                    })}
                                />
                                {errors.description && <p style={{ color: 'red' }}>Rating is required</p>}
                            </FormGroup>
                            <FormGroup>
                                <FormLabel style={{ fontWeight: 'bold', marginTop: '10px', color: 'black' }}>Description</FormLabel>
                                <FormControl
                                    componentclass="textarea"
                                    placeholder="Enter Description"
                                    style={{ fontWeight: 'bold' }}
                                    {...register("description", {
                                        required: true
                                    })}
                                />
                                {errors.description && <p style={{ color: 'red' }}>Description is required</p>}
                            </FormGroup>
                            <Button style={{ marginTop: '10px' }} className="me-4 btn btn-success btn-dark btn-block" type="submit">Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default FormAjout