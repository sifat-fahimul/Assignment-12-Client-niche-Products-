import React, { useEffect, useState } from 'react';
import Product from '../Home/Product/Product';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const ExploreBike = () => {
    const [bikes, setBikes] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/bikes')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, []);
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="row my-5 pt-5">
                    <h1>CHOOSE YOUR BIKE</h1>
                    <p>the most latgest bike store in the wold can serve you latest qulity of motorcycle also you can sell here your motorcycle</p>
                    {
                        bikes.map(bike => <Product
                            key={bike._id}
                            bike={bike}
                        ></Product>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ExploreBike;