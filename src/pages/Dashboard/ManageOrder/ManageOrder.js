import React, { useEffect, useState } from 'react';
import { Form, Table } from 'react-bootstrap';

const ManageOrder = () => {
    const [allOrder, setAllOrder] = useState([]);
    useEffect(() => {
        fetch('https://whispering-tundra-91667.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setAllOrder(data))
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('are you sure to delete this Product ?')
        if (proceed) {
            const url = `https://whispering-tundra-91667.herokuapp.com/delete/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Deleted Successfully')
                        const remaining = allOrder.filter(order => order._id !== id);
                        setAllOrder(remaining)
                    }
                })
        }

    }
    const handleOnBlur = e => {
        // console.log(e.target.value);
    }
    return (
        <div className='mt-5'>
            <h2>Manage Order</h2>

            <div className="container">
                <div className="row my-5 ">
                    <h3>Total Order : {allOrder.length}</h3>
                    <div className="col-lg-2 col-md-2"></div>
                    <div className="col-lg-8 col-md-8 col-12 my-5">

                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th> Name</th>
                                    <th>Products Name</th>
                                    <th>Products Id</th>
                                    <th>Action</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            {allOrder.map(order => <tbody
                                key={order._id}>
                                <tr>
                                    <td>{order.name}</td>
                                    <td>{order.title}</td>
                                    <td>#{order._id}</td>
                                    <td><button onClick={() => handleDelete(order._id)} className='btn btn-outline-danger'>Delete</button></td>

                                    <Form.Select onBlur={handleOnBlur} name='status' aria-label="Default select example">
                                        <option value="Place">Place</option>
                                        <option value="pending">pending</option>
                                        <option value="process">process</option>
                                        <option value="Shipped">Shipped</option>
                                        <option value="Success">Success</option>
                                    </Form.Select>

                                </tr>
                            </tbody>)}
                        </Table>

                    </div>
                    <div className="col-lg-2 col-md-2"></div>
                </div>
            </div>
        </div>
    );
};

export default ManageOrder;