import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import UseItem from '../Hooks/UseItem';
import ShowItems from '../../src/ShowItems/ShowItems';
import '../Inventory/Inventory.css';

const Inventory = () => {
    // h00ks
    const [item] = UseItem()
    const navigate = useNavigate()
    // pagination
    const [items, setItems] = useState([]);
    console.log(items);
    const [displayItems, setDisplayNumber] = useState(4);
    const [onPage, setOnPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`https://calm-chamber-21871.herokuapp.com/itemByPaging?limit=${displayItems}&pageNumber=${onPage}`);

            if (!data?.success) {
                setItems([])
                return toast.error(data.error);

            }
            setItems(data.data);
            setPageCount(Math.ceil(data.count / displayItems))


        })()

    }, [displayItems, onPage, loading])

    return (
        <div className=' my-10'>
            <div className="">
                <div className="">
                    <h5 className="">Latest Collection</h5>
                    <Link to='/' className="view">
                        View all
                    </Link>
                </div>
                <div className="flow-root mx-auto">
                    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                        {
                            items.map(item => <ShowItems
                                loading={loading}
                                setLoading={setLoading}
                                key={item._id}
                              item={item}
                            ></ShowItems>)
                            }
                    </ul>
                </div>

            </div>
            <button onClick={() => navigate('/addItems')} className=" add-btn mx-auto d-block my-3 bg-green-800 rounded p-1 text-white truncate">
                Add More
            </button>
            <div className="flex m-2 justify-center">
                {[...Array(pageCount).keys()].map((number) =>
                (
                    <div
                        onClick={() => setOnPage(number)}
                        className={`${onPage === number ? "" : ""
                            }`}
                    >
                        {number + 1}
                    </div>
                )
                )}
                <select className='rounded-lg' defaultValue={displayItems} onChange={(e) => setDisplayNumber(e.target.value)}>
                    <option value="2">2</option>
                    <option value="4">4</option>
                </select>
            </div>
        </div>
    );
};

export default Inventory;