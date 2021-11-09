import React from 'react';
import { Carousel } from 'react-bootstrap';


import banner1 from '../../../images/banner 1.jpeg';
import banner2 from '../../../images/banner 2.jpg';
import banner3 from '../../../images/banner 3.jpg';

const Banner = () => {
    return (
        <div>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5 className='text-white'>2022 GSX-S1000GT+ - Suzuki Cycles</h5>
                        <p className='text-white'> the first Suzuki motorcycle to feature a full Thin Film Transistor, or TFT, display</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5 className='text-white'>TVS Raider BS6 </h5>
                        <p className='text-white'>TVS Raider Pros and Cons. The most loaded instrument console in its segment. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5 className='text-white'>The 2021 Kawasaki Ninja® 650 ABS</h5>
                        <p className='text-white'> motorcycle combines sharp Ninja styling, next-level technology and a sporty 649cc engine for a bold riding experience.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;