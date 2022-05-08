import React from 'react';
import { useNavigate } from 'react-router-dom';


const Item = ({ item }) => {
    const { id:_id, name, price, quantity, description, img } = item;
    // console.log(props.name);
    const navigate = useNavigate();

    const navigateToInventoryDetail = _id => {

        navigate('/checkout');
    }
    return (
        <div className='item'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <h4>Price: {price}</h4>
            <h4>Quantity:{quantity}</h4>
            <p><small>{description}</small></p>
            <button  onClick={() => navigateToInventoryDetail(_id)}className='stock-btn'>Stock</button>
            <button className='btn'>{name}</button>
        </div>
    );
};

export default Item;