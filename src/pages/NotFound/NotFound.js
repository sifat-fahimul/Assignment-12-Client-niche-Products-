import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <h1>404</h1>
                <h4 >Page Not found !</h4> <br /><br /><br />

                <Link className='fs-5 fw-bold text-decoration-none' to='/'><button className='btn btn-outline-danger px-4'>Go Home</button></Link>
            </div>
        </div>
    );
};

export default NotFound;