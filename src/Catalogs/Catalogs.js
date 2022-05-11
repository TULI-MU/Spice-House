import React, { useEffect, useState } from 'react';
import Catalog from '../Catalog/Catalog';
import './Catalogs.css';


const Catalogs = () => {
    const[catalogs,setCatalogs]=useState([]);
    
    useEffect(() => {
        fetch('https://calm-chamber-21871.herokuapp.com/catalog')
            .then(res => res.json())
            .then(data => setCatalogs(data));
    }, [])

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