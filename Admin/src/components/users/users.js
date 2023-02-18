import React, { useEffect, useState } from "react";
import './users.css'
import axios from "axios";
import { Table, Col, Row } from 'react-bootstrap';
import UserTab from "./UserTab";
import Pagination from 'react-bootstrap/Pagination';

//---------------axios-----------------
const api = axios.create({
    baseURL: "http://localhost:8800/api"
})
function Users() {

    //----------------useState--------------------------------
    const [users, setUsers] = useState([])
    const [numPage, setnumPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    //--------------------------------------------------------

    //---------useEffect---------
    useEffect(() => {
        const AllUsers = () => {
            api.get('/AllUsers?page=' + numPage + '&limit=6').then(rep => {
                console.log(rep.data.users)
                setUsers(rep.data.users)
                setTotalPages(rep.data.totalPages)
            }
            )
        }
        AllUsers()
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
    const Userlist = users.map(e => <UserTab username={e.username} email={e.email} password={e.password} ></UserTab>)

    return (
        <>
            <Row>
                <Col className='text-center'>
                    <h2 style={{ marginTop: '30px', marginLeft: '0px', color: 'black', fontSize: '40px' }}>Users</h2>
                </Col>
                <Table className="table table-striped" style={{ marginTop: '20px', marginBottom: '100px' }}>
                    <thead>
                        <tr className='text-center'>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Userlist}
                    </tbody>
                </Table>
            </Row>
            <Row>
                <Col className='md-6 offset-3'>
                    <Pagination >{items}</Pagination>
                </Col>
            </Row>
        </>
    )
}

export default Users