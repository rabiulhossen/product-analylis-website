import React, { useState, useEffect } from 'react';
import Reviews from '../Reviews/Reviews';
import './Reviewpage.css'

const ReviewsPage = () => {
    const [reviewData, setReviewData] = useState([]);
    useEffect(() => {
        fetch('api.json')
            .then(res => res.json())
            .then(data => {
                setReviewData(data);
            });
    }, []);
    return (
        <div>
            <h1 className='big'>This is Review Page</h1>
            <Reviews reviewData={reviewData} />
        </div>
    );
};

export default ReviewsPage;