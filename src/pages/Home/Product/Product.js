import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ bike }) => {
    const { name, img, price, description } = bike;
    return (
        <div className='col-lg-4 col-md-6 col-12 my-4'>
            <Card style={{ width: '100%', padding: '10px' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <p>{price}</p>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Link className='fs-5 fw-bold text-decoration-none' to='/purchase'><button className='btn btn-outline-success px-4 fw-bold'>Buy now</button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;