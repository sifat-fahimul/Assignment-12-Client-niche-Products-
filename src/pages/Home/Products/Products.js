import React from 'react';
import Product from '../Product/Product';

const Products = () => {
    const bikes = [
        {
            name: 'suzuku gsx r-150',
            price: 'TK 350,000',
            img: 'https://www.banglamotor.net/images/suzuki/suzuki-gsx-r150-img-a2.jpg',
            description: 'Meet the revolutionary Suzuki GSX-R150 Dual ABS with the best power-to-weight ratio and acceleration in the 147.3 cm3 class, plus nimble handling'
        },
        {
            name: 'suzuku gsx r-150',
            price: 'TK 350,000',
            img: 'https://www.banglamotor.net/images/suzuki/suzuki-gsx-r150-img-a2.jpg',
            description: 'Meet the revolutionary Suzuki GSX-R150 Dual ABS with the best power-to-weight ratio and acceleration in the 147.3 cm3 class, plus nimble handling'
        },
        {
            name: 'suzuku gsx r-150',
            price: 'TK 350,000',
            img: 'https://www.banglamotor.net/images/suzuki/suzuki-gsx-r150-img-a2.jpg',
            description: 'Meet the revolutionary Suzuki GSX-R150 Dual ABS with the best power-to-weight ratio and acceleration in the 147.3 cm3 class, plus nimble handling'
        },
        {
            name: 'suzuku gsx r-150',
            price: 'TK 350,000',
            img: 'https://www.banglamotor.net/images/suzuki/suzuki-gsx-r150-img-a2.jpg',
            description: 'Meet the revolutionary Suzuki GSX-R150 Dual ABS with the best power-to-weight ratio and acceleration in the 147.3 cm3 class, plus nimble handling'
        },
        {
            name: 'suzuku gsx r-150',
            price: 'TK 350,000',
            img: 'https://www.banglamotor.net/images/suzuki/suzuki-gsx-r150-img-a2.jpg',
            description: 'Meet the revolutionary Suzuki GSX-R150 Dual ABS with the best power-to-weight ratio and acceleration in the 147.3 cm3 class, plus nimble handling'
        },
        {
            name: 'suzuku gsx r-150',
            price: 'TK 350,000',
            img: 'https://www.banglamotor.net/images/suzuki/suzuki-gsx-r150-img-a2.jpg',
            description: 'Meet the revolutionary Suzuki GSX-R150 Dual ABS with the best power-to-weight ratio and acceleration in the 147.3 cm3 class, plus nimble handling'
        }
    ]
    return (
        <div>
            <div className="container">
                <div className="row my-5 pt-5">
                    <h1>CHOOSE YOUR BIKE</h1>
                    <p>the most latgest bike store in the wold can serve you latest qulity of motorcycle also you can sell here your motorcycle</p>
                    {
                        bikes.slice(0, 6).map(bike => <Product
                            key={bike.name}
                            bike={bike}
                        ></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;