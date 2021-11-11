import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Form, Spinner } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const AddProduct = () => {
    const { isLoading } = useAuth()
    const [product, setProduct] = useState([])
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProduct = { ...product };
        newProduct[field] = value;
        setProduct(newProduct);
    }
    const handleAddProduct = e => {
        fetch('http://whispering-tundra-91667.herokuapp.com/bikes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        }).then(res => res.json())
            .then(data => {
                if (data?.acknowledged) {
                    alert('product added successfully !')

                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <div className="container">
                <div className="row my-5 py-5">
                    <div className="col-lg-3 col-md-2"></div>
                    {!isLoading && < div className="col-lg-6 col-md-8 col-12">
                        <h2>Add a Product</h2>
                        <Form onSubmit={handleAddProduct} className='text-start'>
                            <Form.Group className="mb-3" >
                                <Form.Label>Product Title</Form.Label>
                                <Form.Control required placeholder="Product Title" name='title' onBlur={handleOnBlur} />

                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Product Price</Form.Label>
                                <Form.Control required placeholder="Product Price" name='price' onBlur={handleOnBlur} />

                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Product Description</Form.Label>
                                <Form.Control as="textarea" rows={3} required placeholder='Description' name='description' onBlur={handleOnBlur} />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Image Url</Form.Label>
                                <Form.Control required placeholder="img url" name='img' onBlur={handleOnBlur} />

                            </Form.Group>


                            <Button className='btn btn-success px-4' type="submit">
                                Add product
                            </Button>
                        </Form>
                    </div>}
                    {isLoading && <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>}
                    <div className="col-lg-3 col-md-2"></div>
                </div>
            </div>
        </div >
    );
};

export default AddProduct;