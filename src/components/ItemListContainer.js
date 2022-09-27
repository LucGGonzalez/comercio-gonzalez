import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import {getFirestore, getDocs, collection, query} from 'firebase/firestore';
import MainImgCategories from "./MainImgCategories";

const ItemListContainer = () => {
    const [list, setList] = useState([])
    const { categoryId } = useParams()
    useEffect(() => {
        const db = getFirestore()

        let docRef

        if (categoryId) {
            docRef = db
                .collection('items')
                .where('categoryId', '==', categoryId)
        } else {
            docRef = db.collection('items')
        }

        docRef.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log('No existen resultados')
            }
            setList(
                querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            )
        })
    }, [categoryId])
    return (
        <>
            <MainImgCategories imgCategory={categoryId} />
            {list.length > 0 ? <ItemList list={list} /> : <span />}
        </>
    )
}

export default ItemListContainer;

// const ItemListContainer = ({saludo}) => {
//     const [productList, setProductsList] = useState([])
//     const {categoryName} = useParams();

//     const getProducts = () => {
//         const db = getFirestore();
//         const querySnapshot = collection(db, 'items');

//         if(categoryName){
//             const queryFiltered = query(querySnapshot, where("categoryId","==", categoryName)
//         );
//             getDocs(queryFiltered).then((response) => {
//                 const data = response.docs.map((product) => {
//                     return { id: product.id, ...product.data() };
//                 });
//                 setProductsList(data);
//             });
//         }else{
//             getDocs(querySnapshot).then((response) => {
//                 const data = response.docs.map((product) => {
//                     return { id: product.id, ...product.data() };
//                 });
//                 setProductsList(data);
//             });
//         };
//     };

//     useEffect(() => {
//         getProducts();

//     }, [categoryName]);

//     return (
//         <>
//             <ItemList productList={productList}/>
//             <h3>{saludo}</h3>
//         </>
//     );
    
// };