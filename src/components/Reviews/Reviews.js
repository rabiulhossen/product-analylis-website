import React from 'react';
import useComment from '../../hooks/useComment';

const Reviews = () => {
const [comments,setComments] = useComment()

    return (
        <div>
            <h1>load {comments.length}</h1>
        </div>
    );
};

export default Reviews;