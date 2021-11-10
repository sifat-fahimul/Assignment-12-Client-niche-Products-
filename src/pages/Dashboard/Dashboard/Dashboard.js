import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';

const Dashboard = () => {
    const { logout } = useAuth()
    return (
        <div>
            <Navbar bg="light" expand={false} className='text-center'>
                <Container fluid>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Brand href="#" >Dashboard</Navbar.Brand>
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-start flex-grow-1 pe-3 w-75">
                                <Link className='fs-5 fw-bold text-decoration-none' to='/'><p className='mx-2'>Home </p></Link>
                                <Link className='fs-5 fw-bold text-decoration-none' to='/pay'><p className='mx-2'>pay </p></Link>
                                <Link className='fs-5 fw-bold text-decoration-none' to='/review'><p className='mx-2'>Review </p></Link>
                                <Link className='fs-5 fw-bold text-decoration-none' to='/myOrder'><p className='mx-2'>My Order </p></Link>
                                <Link className='fs-5 fw-bold text-decoration-none' to='/addProduct'><p className='mx-2'>Add a Product </p></Link>
                                <button onClick={logout} className='btn btn-danger px-4'>Log Out</button>

                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <div className="container">
                <div className="row">
                    <MyOrder></MyOrder>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;