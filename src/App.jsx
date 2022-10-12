import React from 'react';
import { useRoutes } from 'react-router-dom';
import {
  Navbar,
  ItemListContainer,
  ItemDetailContainer,
  CartDetail,
  Checkout,
  Contacto,
  NotFound,
  Footer,
} from './components';
import CartProvider from './context/CartContext';

const Routes = () =>
  useRoutes([
    { path: '/', element: <ItemListContainer /> },
    { path: '/category/:catId', element: <ItemListContainer /> },
    { path: '/item/:prodId', element: <ItemDetailContainer /> },
    { path: '/cart', element: <CartDetail /> },
    { path: '/checkout', element: <Checkout /> },
    { path: '/contact', element: <Contacto /> },
    { path: '*', element: <NotFound /> },
  ]);

const App = () => {
  return (
    <CartProvider>
      <Navbar />
      <Routes />
      <Footer />
    </CartProvider>
  );
};

export default App;
