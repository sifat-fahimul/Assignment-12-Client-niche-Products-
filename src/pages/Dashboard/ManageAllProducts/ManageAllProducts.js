import React, { useEffect, useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const ManageAllProducts = () => {
    const { isLoading } = useAuth();
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://whispering-tundra-91667.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleDelete = id => {
        const proceed = window.confirm('are you sure to delete this item')
        if (proceed) {
            const url = `https://whispering-tundra-91667.herokuapp.com/products/delete/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Deleted Successfully')
                        const remaining = products.filter(product => product._id !== id);
                        setProducts(remaining)
                    }
                })
        }

    }
    return (
        <div>
            <div className='container py-5 my-5 text-center'>
                <h1>Mange All Order</h1>
                <div className=" my-5">
                    <div className='row custom'>
                        {
                            products.map(product => <div key={product._id} >
                                {product.title && product.img &&
                                    < div >
                                        {!isLoading && <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src={product.img} />
                                            <Card.Body>
                                                <Card.Title>{product.title}</Card.Title>
                                                <Card.Text>Price : {product.price}
                                                </Card.Text>
                                                <Card.Text>{product.description}
                                                </Card.Text>
                                                <button onClick={() => handleDelete(product._id)} className='btn btn-danger px-4 me-4'>Delete</button>
                                            </Card.Body>
                                        </Card>}
                                        {isLoading && <Spinner animation="border" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </Spinner>}
                                    </div>
                                }

                            </div>)
                        }
                    </div>

                </div>

            </div >
        </div >
    )
};

export default ManageAllProducts;