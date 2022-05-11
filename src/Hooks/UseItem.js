import axios from "axios"
import { useEffect, useState } from "react"

const UseItem= () => {
    const [items, setItems] = useState([]);
    useEffect(() => {

        (async () => {
            try {
                const url = 'https://calm-chamber-21871.herokuapp.com/item/'
                const { data } = await axios.get(url)
                setItems(data)
            }
            catch (error) {
                console.log(error);

            }
        })()
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setGadgets(data))
    }, [])

    return [items, setItems]
}

export default UseItem;