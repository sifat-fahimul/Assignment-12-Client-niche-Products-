import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [bikes, setBikes] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/bikes')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, []);
    return (
        <div>
            <div className="container">
                <div className="row my-5 pt-5">
                    <h1>CHOOSE YOUR BIKE</h1>
                    <p>the most latgest bike store in the wold can serve you latest qulity of motorcycle also you can sell here your motorcycle</p>
                    {
                        bikes.slice(0, 6).map(bike => <Product
                            key={bike._id}
                            bike={bike}
                        ></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;