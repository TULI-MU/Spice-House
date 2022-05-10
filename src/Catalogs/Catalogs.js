import React, { useEffect, useState } from 'react';
import Catalog from '../Catalog/Catalog';
import './Catalogs.css';






const Catalogs = () => {
    const  catalogs = [
        { _id: 1, description: 'Biriyani', img: 'menu1.jpg' },
        { _id: 2, description: 'Spaghetti pasta', img: 'menu2.jpg' },
        { _id: 3, description: 'Fried Rice with Chicken', img: 'menu3.jpg' },
        { _id: 4,  description: 'Dal Curry', img: 'menu4.jpg' },
    
    ]





    // const[catalogs,setCatalogs]=useState([]);
    
    // useEffect(() => {
    //     fetch('http://localhost:5000/catalog')
    //         .then(res => res.json())
    //         .then(data => setCatalogs(data));
    // }, [])

    return (
        <div id='catalogs' className='container'>
            <div className="row">
                <h1 className='text text-center mt-5'>CATALOGS</h1>
                <div id='items' className="items-container">
                    {
                       catalogs.map(catalog=><Catalog
                           key={catalog._id}
                           catalog={catalog}>
                       </Catalog>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Catalogs;