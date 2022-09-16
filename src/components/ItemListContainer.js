import data from "./mockData";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = ({saludo}) => {
    const [productList, setProductsList] = useState([])
    const {categoryName} = useParams();
    if(categoryName){}

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