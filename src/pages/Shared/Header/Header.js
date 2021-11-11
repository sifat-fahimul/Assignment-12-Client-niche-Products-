import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {

    const { user, logout } = useAuth()

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
                        {user?.email && <Link className='fs-5 fw-bold text-decoration-none' to='/dashboard'><p className='mx-2'>Dashboard </p></Link>}
                        {user.email ? <button onClick={logout} className='btn btn-danger px-4'>Log Out</button> : <Link className='fs-5 fw-bold text-decoration-none' to='/login'><p className='mx-2'>Login </p></Link>
                        }

                        <Navbar.Text>
                            <p><span className='fs-4 text-success ps-3'> {avatar}</span> {user?.displayName}</p>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div >
    );
};

export default Header;