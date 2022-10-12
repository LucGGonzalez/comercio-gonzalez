import React from 'react';
import ItemCount from '../ItemCount';
import { Link } from 'react-router-dom';

const ItemProduct = ({ product }) => {
  const { id, title, image, price } = product;
  const currencyOptions = { style: 'currency', currency: 'ARS' };
  const numberFormat = new Intl.NumberFormat('es', currencyOptions);
  return (
    <div className="mx-4 flex flex-col items-center rounded-3xl border-4 border-blue-300 p-2 sm:h-[430px] sm:justify-between">
      <img src={`/assets/products/${image}`} alt={`Imagen ${title}`} className="w-96 md:w-64" />
      <div className="flex flex-col items-center border-t-[1px] border-gray-300 font-semibold">
        <p>{title}</p>
        <p>$ {numberFormat.format(price)}</p>
        <Link to={`/item/${id}`}>
          <button className="my-2 rounded-full border border-solid border-black px-6">Ver detalles</button>
        </Link>
        <ItemCount product={product} />
      </div>
    </div>
  );
};

export default ItemProduct;
