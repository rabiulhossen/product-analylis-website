import React from 'react';
import { Link, Router, useRoutes } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';
import './Home.css';


const Home = ({reviewData}) => {

    return (
        <div>
            <div className='home-comp'>

                <div className='home-div'>
                    <h1>SAMSUNG <span className='astro'>ASTRO WATCH</span> </h1>
                    <p className='para'>Deep dive into Milkyway Galaxy with <span className='astro'>"ASTRO WATCH"</span>.This watch telecast ISS information and enrich with a lot of feature.good fitness features, strong battery life and a comfortable design" thanks to a lightweight build and interesting new body composition measurement tools.</p>

                    <button className="button" role="button">EXPLORE NOW</button>
                </div>
                <div className='home-image'>
                    <img src={"https://i.ibb.co/86pV3Lg/watch.jpg"} alt="" />
                </div>
              
            </div>
            <h1 className='heading'> Customer Feedback</h1>
            <Reviews  reviewData={reviewData}/>
            <Link to="/review" > <button className="see-more-btn" role="button"><span className="text">SEE MORE</span></button></Link>

          

        </div>
    );
};

export default Home;