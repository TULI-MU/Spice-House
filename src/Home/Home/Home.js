import React from 'react';
import Catalogs from '../../Catalogs/Catalogs';
import Items from '../../Inventory/Items/Items';
import Recompose from '../../Recompose/Recompose';
import Banner from '../Banner/Banner';

const Home = () => {
    // const navigate=useNavigate()
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