import React from 'react';
import ItemCount from '../ItemCount';

const ItemDetail = ({ product }) => {
  const { title, image, price, description, stock } = product;
  const currencyOptions = { style: 'currency', currency: 'ARS' };
  const numberFormat = new Intl.NumberFormat('es', currencyOptions);

  return (
    <div className="grid-rows-10 my-20 grid min-h-[68vh] justify-center gap-8 md:grid-cols-10">
      <div className="row-span-7 mx-auto w-[75vw] md:col-span-6 md:w-2/3 lg:w-1/2">
        <img src={`/assets/products/${image}`} alt={title} className="mx-auto" />
      </div>
      <div className="row-span-3 flex flex-col gap-4 px-8 text-center md:col-span-4 md:justify-evenly">
        <h1 className="text-3xl font-semibold">{title}</h1>
        <div className="text-left">
          <p className="mb-4">{description}</p>
          {stock === 0 ? (
            <p className="font-semibold text-red-500">Agotado</p>
          ) : (
            <p className={`${stock > 5 ? 'text-green-600' : 'text-yellow-500'} font-semibold`}>
              Quedan {stock} disponibles
            </p>
          )}
        </div>
        <div className="flex flex-col justify-between gap-4 sm:flex-row md:flex-col">
          <p className="underline- text-2xl">Precio: $ {numberFormat.format(price)}</p>
          <div className="flex flex-col items-center justify-center">
            <ItemCount product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
