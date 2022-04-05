import React, { useEffect, useState } from 'react';


const Reviews = () => {

    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('../../public/api.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])


    return (
        <div>
            <h1></h1>
            {
                review.map(({name,review,rating}) => (<div> <h1>{name}</h1>
                    <h2>{rating}</h2>
                    <h4>{review}</h4>
                </div>))



            }
        </div>
    );
};

export default Reviews;