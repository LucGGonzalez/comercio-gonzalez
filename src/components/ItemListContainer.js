import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import {getFirestore, getDocs, collection, query, where} from 'firebase/firestore';

const ItemListContainer = ({saludo}) => {
    const [productList, setProductsList] = useState([])
    const {categoryName} = useParams();

    const getProducts = () => {
        const db = getFirestore();
        const querySnapshot = collection(db, 'items');

        if(categoryName){
            const queryFiltered = query(querySnapshot, where("categoryId","==", categoryName)
        );
            getDocs(queryFiltered).then((response) => {
                const data = response.docs.map((product) => {
                    return { id: product.id, ...product.data() };
                });
                setProductsList(data);
            });
        }else{
            getDocs(querySnapshot).then((response) => {
                const data = response.docs.map((product) => {
                    return { id: product.id, ...product.data() };
                });
                setProductsList(data);
            });
        };
    };

    useEffect(() => {
        getProducts();

    }, [categoryName]);

    return (
        <>
            <ItemList productList={productList}/>
            <h3>{saludo}</h3>
        </>
    );
    
};

export default ItemListContainer;

// if(categoryName){}

//     useEffect(() => {
//         getProducts.then((response) => {
//             setProductsList(response)
//         });
//     }, [])