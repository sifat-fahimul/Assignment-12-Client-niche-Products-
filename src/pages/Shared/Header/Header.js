import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    const avatar = <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
    return (
        <div>
            <Navbar bg="light" variant="light" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand><Link className='fs-4 text-dark text-decoration-none' to='/'>Bikes Shop</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end">
                        <Link className='fs-5 fw-bold text-decoration-none' to='/home'><p className='mx-2'>Home </p></Link>
                        <Link className='fs-5 fw-bold text-decoration-none' to='/explore'><p className='mx-2'>Explore Bike </p></Link>

                        <Navbar.Text>
                            <p><span className='fs-4 text-success'> {avatar}</span> <a href="#login">Mark Otto</a></p>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div >
    );
};

export default Header;