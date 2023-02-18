import { React, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import Login from '../login/login'
import './register.css'
import axios from 'axios'

//---------------axios-----------------
const api = axios.create({
  baseURL: "http://localhost:8800/api"
})

function Registration() {

  const {
      register,
      handleSubmit,
      formState: { errors }
  } = useForm();

  //--------------------------------------

  const submitHotel = async (data) => {
      console.log(data)
      const usr = {
          username: data.username,
          email: data.email,
          password: data.password
        

      }
      const rep = await api.post('/register', usr)
      console.log(rep)
  }
  
    
  return (
    <>
      <div className='register'>
        <Container>
          <Row className="vh-100 d-flex justify-content-center align-items-center">
            <Col md={8} lg={6} xs={12}>
              <Card className="px-4">
                <Card.Body>
                  <div className="mb-3 mt-md-4">
                    <h2 className="fw-bold mb-2 text-center text-uppercase ">
                      TRAVEL NOW
                    </h2>
                    <div className="mb-3">
                      <Form onSubmit={handleSubmit(submitHotel)}>
                        <Form.Group className="mb-3" controlId="Name">
                          <Form.Label className="text-center">Username</Form.Label>
                          <Form.Control type="text" placeholder="Enter Name" 
                           {...register("username", {
                            required: true,
                            minLength: 3
                        })}
                           />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-center">
                            Email address
                          </Form.Label>
                          <Form.Control type="email" placeholder="Enter email" 
                           {...register("email", {
                            required: true,
                            minLength: 3
                        })}
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" placeholder="Password" 
                           {...register("password", {
                            required: true,
                            minLength: 3
                        })}
                           />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        ></Form.Group>
                        <div className="d-grid">
                          <Button variant="primary" type="submit">
                            Create Account
                          </Button>
                        </div>
                      </Form>
                      <div className="mt-3">
                        <p className="mb-0  text-center">
                          Already have an account??{' '}
                          <Link to='/login' className="text-primary fw-bold">Sign In</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Routes>
        <Route path='/login/*' element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default Registration

/*  confirm password

<Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                         /* <Form.Label>Confirm Password</Form.Label>
                          <Form.Control type="password" placeholder="Password" />
                        </Form.Group> */