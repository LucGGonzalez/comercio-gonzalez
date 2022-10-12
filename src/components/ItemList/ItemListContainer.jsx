import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import Spinner from '../Spinner';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
  let { catId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [listProducts, setListProducts] = useState([]);
  const [searchField, setSearchField] = useState('');
  const searchResults = (details) =>
    details.filter((prod) => prod.title.toLowerCase().includes(searchField.toLowerCase()));

  const handleChange = (e) => setSearchField(e.target.value);

  const getProducts = async () => {
    try {
      const db = getFirestore();
      const productsCollection = collection(db, 'products');
      const criteria = {
        all: productsCollection,
        ofertas: query(productsCollection, where('onSale', '==', true)),
        ultimasunidades: query(productsCollection, where('stock', '<', 5)),
      };

      const filteredProducts = criteria[catId] || criteria.all;
      const products = [];
      const { docs } = await getDocs(filteredProducts);
      docs.map((doc) => products.push({ id: doc.id, ...doc.data() }));
      setListProducts(products);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
    setSearchField('');
  }, [catId]);

  return (
    <div className="flex min-h-[85vh] flex-col p-16 text-center">
      <section className="flex flex-col items-center gap-8">
        <h1 className="text-4xl font-bold uppercase">Smith Store</h1>
        <div className="mb-8">
          <input
            className="h-10 w-64 rounded-full border-none bg-gray-800 px-4 font-semibold text-white outline-none placeholder:text-white"
            type="search"
            value={searchField}
            placeholder="Busque su producto..."
            onChange={handleChange}
          />
        </div>
      </section>
      {isLoading ? <Spinner /> : <ItemList dataProducts={searchResults(listProducts)} />}
    </div>
  );
};

export default ItemListContainer;
