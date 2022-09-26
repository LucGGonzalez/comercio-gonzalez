import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import {useParams} from 'react-router-dom';
import {getFirestore, doc, getDoc} from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [items, setItems] = useState([])
    const {itemId} = useParams();
    const db = getFirestore();
    //En vez del id directo va la const del useparams
    const queryDoc = doc(db, 'items', 'gVEanHBReLOa9wkvCY5A');
    
    getDoc(queryDoc).then((res) => {})

    const getItems = () => {
        const queryDoc = doc(db, 'items', 'gVEanHBReLOa9wkvCY5A');
        getDoc(queryDoc).then((res) => {
            setItems(res.data());
        })
    };

    useEffect(() => {
        getItems();
    }, [itemId]);
        
    return (
        <>
            {items && <ItemDetail items={items}/>}
        </>
    );
    
}

export default ItemDetailContainer;