import React from 'react';
import { useNavigate } from 'react-router-dom';
import Catalogs from '../../Catalogs/Catalogs';
import ItemDetail from '../../inventory/ItemDetail/ItemDetail';
import Items from '../../inventory/Items/Items';
import Recompose from '../../Recompose/Recompose';
import Banner from '../Banner/Banner';

const Home = () => {
    const navigate=useNavigate()
    // const handleToManage =()=>{
    //     navigate('/manage')
    // }
    return (
        <div>
            <>
            
            <Banner></Banner>
            <Items></Items>
            <Recompose></Recompose>
            <Catalogs></Catalogs>
            {/* <button onClick={handleToManage}>Manage</button> */}
            
            </>
           
        </div>
    );
};

export default Home;