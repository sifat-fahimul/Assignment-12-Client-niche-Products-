import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Form, Spinner } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { registerUser, isLoading, authError } = useAuth();

    const history = useHistory()

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleRegisterSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Password did not match')
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault()
    }
    return (
        <div>
            <div className="container">
                <div className="row my-5 py-5">


                    <div className="col-lg-3 col-md-2"></div>
                    {!isLoading && <div className="col-lg-6 col-md-8 col-12">
                        <h2>Register an Account</h2>
                        <h4 className='text-danger'>{authError}</h4>
                        <Form onSubmit={handleRegisterSubmit} className='text-start'>
                            <Form.Group className="mb-3">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control placeholder="Enter Your Name" name='name' onBlur={handleOnBlur} />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name='email' onBlur={handleOnBlur} />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name='password' onBlur={handleOnBlur} />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Re type Password</Form.Label>
                                <Form.Control type="password" placeholder="Re type Password" name='password2' onBlur={handleOnBlur} />
                            </Form.Group>
                            <Link className='text-decoration-none' to='/login'><p>Already have an Account ?</p></Link>
                            <Button className='btn btn-success px-4' type="submit">
                                Register
                            </Button>
                        </Form>
                    </div>}
                    {isLoading && <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>}
                    <div className="col-lg-3 col-md-2 "></div>
                </div>

            </div>
        </div>
    );
};

export default Register;