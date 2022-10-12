import React from 'react';

const Spinner = () => (
  <div className={`flex items-center justify-center`}>
    <div className="h-20 w-20 animate-spin rounded-full border-4 border-solid border-blue-200 border-l-blue-500">
      <span className="sr-only">Cargando...</span>
    </div>
  </div>
);

export default Spinner;
