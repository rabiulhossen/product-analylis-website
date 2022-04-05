import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div>
                <h1 className='title'>GALAXY STORE</h1>

            </div>
            <div className='header-link'>
                <Link to="/">Home</Link>
                <Link to="dashboard">Dashboard</Link>
                <Link to="/review">Reviews</Link>
                <Link to="blog">Blog</Link>
                <Link to="about">About</Link>
                
                
            </div>
        </div>
    );
};

export default Header;