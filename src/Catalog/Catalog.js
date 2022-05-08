import React from 'react';
import './Catalog.css';

const Catalog = ({ catalog }) => {
    const {_id, description, img } = catalog;
    
    return (
        <div className='item'>
            <img className='w-100' src={img} alt="" />
            <p><small>{description}</small></p>
            
        </div>
    );
};

export default Catalog;