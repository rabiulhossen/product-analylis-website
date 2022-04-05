import React from 'react';
import Header from '../Header/Header';
import './Home.css';






const Home = () => {
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
        <button className="see-more-btn" role="button"><span class="text">SEE MORE</span></button>
        </div>
    );
};

export default Home;