import React, { useContext } from 'react';
import { IconContext } from 'react-icons';
import { BsCart2 } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartWidget = ({ mobile }) => {
  const { cart } = useContext(CartContext);
  const cartQuantity = cart.reduce((acc, product) => acc + product.quantity, 0);
  return (
    <Link to="/cart">
      <button className={`flex flex-row gap-2 ${mobile ? 'ml-2' : 'ml-8'}`}>
        <IconContext.Provider value={{ size: '2rem', color: 'white' }}>
          <BsCart2 />
        </IconContext.Provider>
        {cartQuantity > 0 ? (
          <span className="text-bold rounded-full bg-blue-700 px-2 text-sm text-white">{cartQuantity}</span>
        ) : null}
      </button>
    </Link>
  );
};

export default CartWidget;
