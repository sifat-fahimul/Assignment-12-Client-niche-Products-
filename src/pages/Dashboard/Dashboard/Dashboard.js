import React from 'react';
import { Container, Nav, Navbar, Offcanvas, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';
import {
    Switch,
    Route,
    useRouteMatch
}
    from "react-router-dom";
import AddProduct from '../AddProduct/AddProduct';
import Review from '../Review/Review';
import Pay from '../Pay/Pay';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrder from '../ManageOrder/ManageOrder';
import ManageAllProducts from '../ManageAllProducts/ManageAllProducts';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import Footer from '../../Shared/Footer/Footer';

const Dashboard = () => {
    const { admin, isLoading } = useAuth();
    let { path, url } = useRouteMatch();
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
                            <Offcanvas.Title id="offcanvasNavbarLabel">Dashboard</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-start flex-grow-1 pe-3 w-75">
                                <Link className='fs-5 fw-bold text-decoration-none' to='/'><p className='mx-2'>Home </p></Link>
                                <Link className='fs-5 fw-bold text-decoration-none' to='/explore'><p className='mx-2'>Explore Bike </p></Link>
                                <Link className='fs-5 fw-bold text-decoration-none' to={`${url}/pay`}><p className='mx-2'>pay </p></Link>
                                <Link className='fs-5 fw-bold text-decoration-none' to={`${url}/review`}><p className='mx-2'>Review </p></Link>
                                <Link className='fs-5 fw-bold text-decoration-none' to={`${url}/myOrder`}><p className='mx-2'>My Order </p></Link>
                                {admin && <div>
                                    <Link className='fs-5 fw-bold text-decoration-none' to={`${url}/addProduct`}><p className='mx-2'>Add a Product </p></Link>
                                    <Link className='fs-5 fw-bold text-decoration-none' to={`${url}/makeAdmin`}><p className='mx-2'>Make admin </p></Link>
                                    <Link className='fs-5 fw-bold text-decoration-none' to={`${url}/manageOrder`}><p className='mx-2'>Manage Order </p></Link>
                                    <Link className='fs-5 fw-bold text-decoration-none' to={`${url}/manageAllProducts`}><p className='mx-2'>Manage All Products </p></Link></div>}
                                <button onClick={logout} className='btn btn-danger px-4'>Log Out</button>

                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <div className="container">
                {!isLoading && <div className="row">
                    <Switch>
                        <Route exact path={`${path}/`}>
                            <MyOrder></MyOrder>
                        </Route>
                        <Route path={`${path}/myOrder`}>
                            <MyOrder></MyOrder>
                        </Route>
                        <AdminRoute path={`${path}/addProduct`}>
                            <AddProduct></AddProduct>
                        </AdminRoute>
                        <Route path={`${path}/review`}>
                            <Review></Review>
                        </Route>
                        <Route path={`${path}/pay`}>
                            <Pay></Pay>
                        </Route>
                        <AdminRoute path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageOrder`}>
                            <ManageOrder></ManageOrder>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageAllProducts`}>
                            <ManageAllProducts></ManageAllProducts>
                        </AdminRoute>
                    </Switch>

                </div>}
                {isLoading && <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;