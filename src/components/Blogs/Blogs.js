import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blog-div'>
            <h1 className="question-heading">Spread More Knowledge</h1>
            <div>
            <h2 className="question-heading">What is Context API?</h2>
            <h5 className='font'>Context API helps to avoid props drilling in our React application.Context API is a react structure that helps us reduce amonut of props drilling. Normally if we want to pass a props from one component to its child component we need to pass it using props. For one or two components its okay, but if the level increases that becomes ugly and hard over time. In such scenario context api helps us. Where we can create a context and wrap the parent component with the context provider then we can access the context in any child component</h5>
            </div>
            <div>
                <h2 className="question-heading">What is Semantic Tag in HTML5?</h2>
                <h5 className='font'>Semantic HTML tag  are those that clearly describe their usages meaning.For creating different portion in our webpage we use div tag.But it is laggy and unreadable when a lot of use.For this reason Semantic tag is easier way for coding.Instead of div tag we can use Semantic tag.</h5>
                <h4 className='font'>there are some example of semantic tag:</h4>
                <li>Article</li>
                <li>Main</li>
                <li>Header</li>
                <li>Footer</li>
                <li>Aside</li>
                <li>section</li>
                
            </div>
        </div>
    );
};

export default Blogs;