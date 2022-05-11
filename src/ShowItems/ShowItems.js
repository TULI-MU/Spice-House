
import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import '../ShowItems/ShowItems.css';

const ShowItems = ({ item, setLoading, loading }) => {
    const navigate = useNavigate()
    const { name, price, image, supplier, _id } = item
    const deleteItem = (id) => {
        const permission = window.confirm('Are want to delete?')
        if (permission) {
            (async () => {
                const { data } = await axios.delete(`https://calm-chamber-21871.herokuapp.com/deleteItem/${id}`);

                if (data.deletedCount === 1) {
                    toast.success('Deleted 1', { id: 'success' })
                    setLoading(!loading)
                }
            })()
        }
    }
    return (
        <li className="py-3 sm:py-4">
            <div className="show-items">
                <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src={image} alt="" />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {name}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        {supplier}
                    </p>

                    <div className='d-flex'>
                        <button onClick={() => { deleteItem(_id) }} className="delete bg-red-800 rounded p-1 text-white truncate">
                            Delete
                        </button>
                        <button onClick={() => navigate(`/updateto/${_id}`)} className=" show-item ms-3 bg-sky-800 rounded p-1 text-white truncate">
                            Update
                        </button>
                    </div>

                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $ {price}
                </div>
            </div>
        </li>
    );
};


export default ShowItems;