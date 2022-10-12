import React, { useState, createContext } from 'react';
import Swal from 'sweetalert2';

export const CartContext = createContext();

const getInitialState = () => {
  const productsInCart = localStorage.getItem('productsInCart');
  return productsInCart ? JSON.parse(productsInCart) : [];
};

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getInitialState());
  let modalFlag = true;

  const checkStock = (productInCart, product) => {
    if (productInCart.quantity + product.quantity > productInCart.stock) {
      Swal.fire({
        title: 'Error en la operación',
        text: `No hay stock suficiente. La cantidad máxima permitida de este producto es de ${productInCart.stock} unidades.`,
        icon: 'error',
        confirmButtonText: 'OK',
        background: '#19191a',
        color: '#fff',
      });
      modalFlag = false;
      return productInCart;
    }
    return {
      ...productInCart,
      quantity: productInCart.quantity + product.quantity,
    };
  };

  const addToCart = (product) => {
    const isProductInCart = cart.find((productInCart) => productInCart.id === product.id);
    let cartArray = [];

    if (isProductInCart) {
      cartArray = cart.map((productInCart) =>
        productInCart.id === product.id ? checkStock(productInCart, product) : productInCart
      );
    } else {
      cartArray = [...cart, product];
    }
    if (modalFlag) {
      Swal.fire({
        toast: true,
        icon: 'success',
        title: 'Producto añadido al carrito',
        position: 'top-end',
        customClass: {
          timerProgressBar: 'bg-blue-300',
        },
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
      });
    }
    setCart(cartArray);
    localStorage.setItem('productsInCart', JSON.stringify(cartArray));
    modalFlag = true;
  };

  const clear = () => {
    setCart([]);
    localStorage.removeItem('productsInCart');
  };

  const removeFromCart = (id) => {
    const modifiedCart = cart.filter((product) => product.id !== id);
    setCart(modifiedCart);
    localStorage.setItem('productsInCart', JSON.stringify(modifiedCart));
  };

  const totalPrice = () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, clear, removeFromCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
