import data from "./mockData";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
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
            <ItemDetail lista={productList}/>
        </>
    );
    
};

export default ItemDetailContainer;