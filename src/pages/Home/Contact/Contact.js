import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkedAlt, faPhoneAlt, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Form } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    const mapIcon = <FontAwesomeIcon icon={faMapMarkedAlt}></FontAwesomeIcon>
    const phoneIcon = <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
    const envelopIcon = <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
    return (
        <div>
            <div className="container my-5">
                <hr />
                <h1 className=' my-5'>Contact Us</h1>
                <div className="row">
                    <div className="col-lg-8 col-md-7 col-12 my-4">
                        <h5>Contact us anytime</h5>
                        <p className='custom-border'></p>
                        <h2>SEND US YOUR COMMENTS</h2>
                        <Form>
                            <Form.Group className="mb-3 text-start" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name </Form.Label>
                                <Form.Control className='rounded-pill bg-light' required type="text" placeholder="Type your name" />
                            </Form.Group>
                            <Form.Group className="mb-3 text-start" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control className='rounded-pill bg-light' required type="email" placeholder="Enter your email" />
                            </Form.Group>
                            <Form.Group className="mb-3 text-start" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control className='rounded-pill bg-light' required type="text" placeholder="" />
                            </Form.Group>
                            <Form.Group className="mb-3 text-start" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder='Type your comment' />
                            </Form.Group>
                            <button className='btn btn-primary px-3'>Submit</button>
                        </Form>
                    </div>
                    <div className="col-lg-4 col-md-5 col-12 text-center">
                        <div className='my-4'>
                            <span className='contact-circle text-white fs-1 text-center' >{envelopIcon}</span>
                            <h5 className='mt-4'>EMAIL</h5>
                            <small>example@example.com</small><br />
                            <small></small>
                        </div>
                        <div className='my-4'>
                            <span className='contact-circle text-white fs-1 text-center' >{mapIcon}</span>
                            <h5 className='mt-4'> VISIT OFFICE</h5>
                            <small>WE ARE ONLINE  24/7  </small><br />
                            <small>DHAKA 1200, BANGLADESH</small>
                        </div>
                        <div className='my-4'>
                            <span className='contact-circle text-white fs-1 text-center' >{phoneIcon}</span>
                            <h5 className='mt-4'>PHONE CONTACT</h5>
                            <small>Within working hours  </small><br />
                            <small>+1555 6761 020</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;