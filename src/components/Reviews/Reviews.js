import React, { useState } from 'react';
import './Reviews.css'

const Reviews = ({ reviewData }) => {

    return (
        <div>
            {
                reviewData?.map(({ name, id, rating, comment }) => (<div key={id}>
                    <div className='review-div'>
                        <div className='contain'>
                            <h2>Name:{name}</h2>
                            <div>  <h3 className='rating'>Rating:{rating}</h3></div>
                            <div>  <h3>Review:{comment}</h3></div>
                        </div>


                    </div>

                </div>))
            }
        </div>
    );
};

export default Reviews;