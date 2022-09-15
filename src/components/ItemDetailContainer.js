import data from "./mockData";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        getItems.then((response) => {
            setItems(response)
        });
    }, [])

    const getItems = new Promise ((resolve, reject) => {
        setTimeout(() =>{
            resolve(data.find(data => data.id = 1));
        }, 2000);
       })
        

    return (
        <>
            <ItemDetail items={items}/>
        </>
    );
    
}

export default ItemDetailContainer;