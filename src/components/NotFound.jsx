import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex min-h-[84vh] flex-col items-center justify-center gap-8 p-16 ">
      <h1 className="text-4xl">¡Página no encontrada!</h1>
      <Link
        to="/"
        className="rounded-full border-2 border-blue-600 px-10 py-4 font-medium text-black hover:bg-blue-600 hover:text-white md:text-lg md:font-semibold"
      >
        Volver a la tienda
      </Link>
    </div>
  );
};

export default NotFound;
