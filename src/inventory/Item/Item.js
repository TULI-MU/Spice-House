import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Item/Item.css';


const Item = ({ item }) => {
    const {_id, name, price,supplier, quantity, description, img } = item;

    console.log(img);
    const navigate = useNavigate();

    const navigateToItemDetail = id => {

        navigate(`/item/${id}`);
    }
    return (
        <div className='item'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>

            <h4>Quantity:{quantity}</h4>
            <p><small>Description:{description}</small></p>
            <button  onClick={() => navigateToItemDetail(_id)}className='stock-btn'>Stock</button>
            
        </div>
    );
};

export default Item;