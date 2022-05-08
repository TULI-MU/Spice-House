import React from 'react';
import { Link, useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const { inventoryId } = useParams();
    return (
        <div>
            <h2>Inventory detail:{inventoryId}</h2>

            <h2>Please Order Your Food</h2>
            <Link to='/checkout'>
                <button className='btn btn-primary'>Delivered</button>
            </Link>

        </div>
    );
};

export default InventoryDetail;