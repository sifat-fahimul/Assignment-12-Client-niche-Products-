import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import Rating from 'react-rating'

const ReviewRating = () => {
    const [ratings, setRatings] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setRatings(data))
    }, [])
    return (
        <div>
            <div className="container">
                <hr />
                <div className="row">
                    <h2 className='my-5'>Total Rating : {ratings.length}</h2>
                    {
                        ratings.map(rating => <div className="col-lg-3 col-md-6 col-12" key={rating._id}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title> Name : {rating.name}</Card.Title>
                                    <Card.Text>
                                        {rating?.email && <span> Email : {rating?.email}</span>}
                                    </Card.Text>
                                    <Rating className='text-warning'
                                        initialRating={rating.rating}
                                        emptySymbol='far fa-star'
                                        fullSymbol='fas fa-star' readonly></Rating>
                                    <Card.Text>
                                        {rating.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ReviewRating;