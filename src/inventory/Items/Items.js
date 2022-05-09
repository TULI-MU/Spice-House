import './Items.css'
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import UseItem from '../../Hooks/UseItem';
import Item from '../Item/Item';

const Items = () => {
    const navigate = useNavigate()
    const [items] = UseItem();
    const sixItems = items.slice(0, 6)


    return (
        <div>
            <h1 className='text-center my-3 text-3xl text-black font-bold'>Our Best Selling Items</h1>
            <div className='item-container'>

                <div className='allItems my-4'>
                    {
                        sixItems.map(item => <Item
                            key={item._id}
                            item={item}
                        ></Item>)
                    }

                </div>
            </div>

            <button onClick={() => navigate('/inventory')} className='btn btn-primary d-block my-3 mx-auto'>Manage Invent</button>

        </div>
    );
};

export default Items;