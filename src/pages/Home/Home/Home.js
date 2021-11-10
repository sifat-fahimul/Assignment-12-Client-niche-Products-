import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Products from '../Products/Products';
import ReviewRating from '../ReviewRating/ReviewRating';

const Home = () => {
    return (
        <div>
            <div className="container"></div>
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <ReviewRating></ReviewRating>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;