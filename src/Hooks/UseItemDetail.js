import React, { useEffect, useState } from 'react';

const UseItemDetail = itemId => {
    const [item, SetItem] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/item/${itemId}`
        fetch(url)
            .then(res => res.json())
            .then(data => SetItem(data))
    }, [itemId])


    return [item]
};

export default UseItemDetail;