import React from 'react';
import { Link } from 'react-router-dom';

const NavbarElem = ({ name, id }) => {
  const elemStyle = 'hover:bg-gray-700 text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium block';
  return id !== 'contacto' ? (
    <Link to={`/category/${id}`} className={elemStyle}>
      {name}
    </Link>
  ) : (
    <Link to={`/contact`} className={elemStyle}>
      {name}
    </Link>
  );
};

export default NavbarElem;
