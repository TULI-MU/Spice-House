import React from 'react';
import logo from '../../images/logo.png';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='mt-5 footer bg-secondary'>
            <img src={logo} alt="" />
            <div className='display'>
                <h2>Spice House</h2>
                <p className='left'><small>healthy Cooking</small></p>
            </div>
            <div>
                <h5>Contact:</h5>
                <p>01746861166</p>
                <p>pauljoyosree12@gmail.com</p>
                <p className='text-center'><small>copyright @ {year} </small></p></div>
        </footer>
    );
};

export default Footer;