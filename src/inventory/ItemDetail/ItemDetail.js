import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import '../ItemDetail/ItemDetail.css';

const ItemDetail = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({})
    const [reload, setReload] = useState(false)
    useEffect(() => {
        const url = `http://localhost:5000/item/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));

    }, [itemId, reload]);


    const handleUpdateQuantity = async event => {
        event.preventDefault();
        const newQuantity = event.target.quantity.value;
        const quantity = parseInt(item.quantity) + parseInt(newQuantity)
        await axios.put(`http://localhost:5000/item/${itemId}`,
            {
                quantity
            })
            .then(response => {
                setReload(!reload)
                console.log(response);
            })

    }
    const handleDeliver = () => {

        const quantity = parseInt(item.quantity) - 1;
        axios.put(`https://calm-chamber-21871.herokuapp.com/item/${itemId}`,
            {
                quantity
            })
            .then(response => {
                setReload(!reload)
                window.alert('Delivered Successfull');
            })
    }

    return (
        <div className='item-details'>
            <img className='w-100' src={item.img} alt="" />
            <h2>Selected Product :{item.name}</h2>
            <h4>Supplier:{item.supplier}</h4>
            <h2> Quantity : {item.quantity}</h2>
            <p>Description:{item.description}</p>
            <button className='btn btn-link text-white text-decoration-none'>Manage Inventories</button>
            <br />
            <form onSubmit={handleUpdateQuantity} >
                <input type="number" name="quantity" placeholder='Update quantity' id="" />
                <button onClick={handleUpdateQuantity}>Update</button>
            </form>
            <button onClick={handleDeliver}>Deliver</button>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ItemDetail;