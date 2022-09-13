import data from "./mockData";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = ({saludo}) => {
    const [productList, setProductsList] = useState([])

    useEffect(() => {
        getProducts.then((response) => {
            setProductsList(response)
        });
    }, [])

    const getProducts = new Promise ((resolve, reject) => {
        setTimeout(() =>{
            resolve(data);
        }, 2000);
       })

    return (
        <>
            <ItemList lista={productList}/>
            <h3>{saludo}</h3>
        </>
    );
    
};

export default ItemListContainer;