import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './MyOrder.css'

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://whispering-tundra-91667.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('are you sure to delete this item')
        if (proceed) {
            const url = `https://whispering-tundra-91667.herokuapp.com/delete/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Deleted Successfully')
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining)
                    }
                })
        }

    }
    return (
        <div>
            <div className='container py-5 my-5 text-center'>
                <h1>My Orders</h1>
                <div className=" my-5">
                    <div className='row custom'>
                        {
                            orders.map(order => <div key={order._id} >
                                {order.title && order.img &&
                                    < div >
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src={order.img} />
                                            <Card.Body>
                                                <Card.Title>{order.title}</Card.Title>
                                                <Card.Text>{order.description}
                                                </Card.Text>
                                                <button onClick={() => handleDelete(order._id)} className='btn btn-danger px-4 me-4'>Delete</button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                }

                            </div>)
                        }
                    </div>
                </div>

            </div >
        </div>
    );
};

export default MyOrder;