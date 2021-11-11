
import { faHandPointRight } from '@fortawesome/free-regular-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'



const Footer = () => {
    const handArrow = <FontAwesomeIcon icon={faHandPointRight} />
    const call = <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>

    return (
        <div className='bg-color'>
            <div className="container">
                <div className="row text-white text-start py-5">
                    <div className="col-lg-3 col-md-6 col-12">
                        <h1 className='fw-normal'>Bike Shop</h1>
                        <div className="text-secondary">
                            <p className='my-4'> Bike shop  the most latgest bike store in the wold can serve you latest ulity of motorcycle soucan sell here your motorcycle it quo</p>
                            <h4> FOR SUPPORT</h4>
                            <h4>{call} +00 2211 3344</h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <h2 className='mb-4'>QUICK LINK</h2>
                        <Link className='text-decoration-none text-secondary' to='/'><h5> <span className='text-success'>{handArrow} </span>  Home</h5></Link>
                        <Link className='text-decoration-none text-secondary' to='/explore'><h5> <span className='text-success'>{handArrow} </span>  Explore Bike</h5></Link>
                        <Link className='text-decoration-none text-secondary' to='/dashboard'><h5> <span className='text-success'>{handArrow} </span>  Dashboard</h5></Link>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <h2 className='mb-4'>LATEST TWEET</h2>
                        <div className="text-secondary">
                            <p className='my-2'>@Smith, the most latgest bike store in the wold can serve you 10 min ago</p>
                            <p className='my-2'>@Smith, the most latgest bike store in the wold can serve you 10 min ago</p>
                            <p className='my-2'>@Smith, the most latgest bike store in the wold can serve you 10 min ago</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <h2 className='mb-4'>CONTACT INFO</h2>
                        <div className="text-secondary">
                            <h4>Address </h4>
                            <p>motizil dhaka 1200</p>
                            <h4>Phone</h4>
                            <p>{call} +00 2211 3344</p>
                            <p>{call} +00 2211 3344</p>
                            <h4>Web</h4>
                            <p>www.example.com</p>
                        </div>
                    </div>
                </div>
                <p className='border border-top'></p>
                <p className='py-4 text-white'>©Copyright, 2021 All Rights Reserved by Sifat Fahimul</p>
            </div>
        </div>
    );
};

export default Footer;