import React from 'react';
import './NOTFound.css'

const NOTFound = () => {
    return (
        <div className='not-div'>
            <h1 className='not-found' title='CLICK HOME MENU'>THIS URL IS NOT FOUND</h1>
            <h1 className='error' title='CLICK HOME MENU'>404</h1>
        </div>
    );
};

export default NOTFound;