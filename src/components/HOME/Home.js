import React from 'react';
import Header from '../Header/Header';
import './Home.css';
import watch from '../watch.jpg';




const Home = () => {
    return (
        <div>

            <div>
                <h1>Samsung Smart watch</h1>
                <p>Deep dive into Milkyway Galaxy with"ASTRO WATCH".This watch telecast ISS information & enrich with a lot of feature.</p>
            </div>
            <div>
<img src="{watch.jpg}" alt="" />
            </div>

        </div>
    );
};

export default Home;