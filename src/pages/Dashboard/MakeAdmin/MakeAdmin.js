import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://whispering-tundra-91667.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setEmail('')
                    alert('Admin Make Successful !!')
                }
            })


        e.preventDefault();
    }
    return (
        <div>
            <div className="container">
                <div className="row my-5 py-5 w-100 text-start">
                    <div className="col-lg-3 col-md-2"></div>
                    <div className="col-lg-6 col-md-8 col-12">
                        <h2>Make an Admin</h2>
                        <form onSubmit={handleAdminSubmit}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onBlur={handleOnBlur} />
                            </Form.Group>
                            <button className='btn btn-primary' type='submit'>Make Admin</button>
                        </form>
                    </div>
                    <div className="col-lg-3 col-md-2"></div>

                </div>
            </div>

        </div>
    );
};

export default MakeAdmin;