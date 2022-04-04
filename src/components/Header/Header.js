import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div>
                <h1 className='title'>SAMSUNG STORE</h1>

            </div>
            <div className='header-link'>
                <Link to="/">Home</Link>
                <Link to="about">About</Link>
                <Link to="blog">Blog</Link>
                <Link to="dashboard"></Link>
            </div>
        </div>
    );
};

export default Header;