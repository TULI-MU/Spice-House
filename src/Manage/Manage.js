import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UseItem from '../Hooks/UseItem';
import Item from '../inventory/Item/Item';

const Manage = () => {
    const [items, setItems] = useState([]);
    const navigate=useNavigate();
    useEffect(() => {
        fetch('')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('want to delete?')
        if (proceed) {
            const url = `https://calm-chamber-21871.herokuapp.com/item/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = items.filter(item => item._id !== id)
                    setItems(remaining)
                })
        }
    }
const navigateToAddItem=()=>{
  navigate('/additems')
}
    return (
        <div id="services" className='container'>
            <div className="">
                <h1 className='text-secondary text-center mt-5'>Manage Items</h1>
                <br />
                <button onClick={navigateToAddItem}>Add New Item</button>
                <div className="Items-container">
                    {
                        items.map(item => <div key={item._id} >
                            <h1>{item.name}</h1>

                            <p>Supplier: {item.supplier}</p>
                            <img style={{ width: '200px' }} src={item.img} alt="" />
                            <h2>Price: {item.price}</h2>
                            <p>{item.description}</p>
                            <button onClick={() => handleDelete(item._id)}>delete</button>

                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Manage;