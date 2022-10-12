import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartDetail = () => {
  const { cart, removeFromCart, clear, totalPrice } = useContext(CartContext);
  const currencyOptions = { style: 'currency', currency: 'ARS' };
  const numberFormat = new Intl.NumberFormat('es', currencyOptions);
  return (
    <div className="container mx-auto mt-10">
      <div className="my-10 flex shadow-md">
        <div className="min-h-[80vh] w-full bg-white px-10 py-10">
          {cart.length ? (
            <>
              <div className="flex justify-between border-b pb-4">
                <h1 className="text-2xl font-semibold">
                  {cart.length} {`${cart.length === 1 ? 'producto' : 'productos'}`}
                </h1>
              </div>
              <div className="my-8 flex gap-4">
                <h3 className="w-2/5 text-center text-xs font-semibold text-gray-500">PRODUCTO</h3>
                <h3 className="w-1/5 text-center text-xs font-semibold text-gray-500 ">PRECIO</h3>
                <h3 className="w-1/5 text-center text-xs font-semibold text-gray-500">CANTIDAD</h3>
                <h3 className="w-1/5 text-center text-xs font-semibold text-gray-500">TOTAL</h3>
              </div>
              {cart.map((product) => (
                <div className="flex items-center gap-4 py-5 hover:bg-blue-100" key={product.id}>
                  <div className="flex w-2/5">
                    <div className=" hidden sm:block">
                      <img className="h-24 w-20" src={`assets/products/${product.image}`} alt={product.title} />
                    </div>
                    <div className="ml-4 flex flex-grow flex-col justify-between">
                      <span className="text-center text-sm font-bold">
                        <Link to={`/item/${product.id}`}>{product.title}</Link>
                      </span>
                      <div className="flex justify-end">
                        <button onClick={() => removeFromCart(product.id)} className="text-xs text-red-500">
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </div>
                  <span className="w-1/5 break-words text-center text-sm font-semibold">
                    ${numberFormat.format(product.price)}
                  </span>
                  <span className="w-1/5 text-center text-sm font-semibold">{product.quantity}</span>
                  <span className="w-1/5 text-center text-sm font-semibold">
                    ${numberFormat.format(product.price * product.quantity)}
                  </span>
                </div>
              ))}
              <Link to="/" className="mt-10 text-sm font-semibold text-blue-600">
                Volver a la tienda
              </Link>
              <div className="text-sm text-orange-500">
                <button onClick={clear}>Limpiar</button>
              </div>
              <div className="flex flex-col items-end">
                <h3 className="px-6 py-2 text-2xl font-semibold">Total: ${numberFormat.format(totalPrice())}</h3>
                <Link
                  to={'/checkout'}
                  className="rounded-3xl border bg-blue-600 px-8 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:bg-gray-400"
                >
                  Finalizar compra
                </Link>
              </div>
            </>
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-8 text-center">
              <h1 className="text-2xl font-semibold md:text-4xl">No hay productos en el carrito.</h1>
              <Link
                to="/"
                className="rounded-full border-2 border-blue-600 px-10 py-4 font-medium text-black hover:bg-blue-600 hover:text-white md:text-lg md:font-semibold"
              >
                Volver a la tienda
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDetail;
