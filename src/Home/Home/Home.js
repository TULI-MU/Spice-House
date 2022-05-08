import React from 'react';
import Catalogs from '../../Catalogs/Catalogs';
import ItemDetail from '../../inventory/ItemDetail/ItemDetail';
import Items from '../../inventory/Items/Items';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <>
            
            <Banner></Banner>
            <Items></Items>
            <Catalogs></Catalogs>
            
            </>
           
        </div>
    );
};

export default Home;