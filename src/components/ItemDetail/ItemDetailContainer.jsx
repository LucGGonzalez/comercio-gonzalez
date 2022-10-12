import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner';
import NotFound from '../NotFound';
import ItemDetail from './ItemDetail';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const getProduct = async (prodId) => {
  const db = getFirestore();
  const docRef = doc(db, 'products', prodId);
  const docSnap = await getDoc(docRef);
  return { id: prodId, ...docSnap.data() };
};

const ItemDetailContainer = () => {
  let { prodId } = useParams();

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProduct(prodId)
      .then((prod) => {
        setProduct(prod);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        console.error(e);
      });
  }, [prodId]);

  return (
    <section className="flex min-h-[86vh] flex-col items-center justify-center p-16">
      {isLoading ? <Spinner /> : product ? <ItemDetail product={product} /> : <NotFound />}
    </section>
  );
};

export default ItemDetailContainer;
