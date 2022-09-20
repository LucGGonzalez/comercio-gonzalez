import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {CartProvider} from './context/CartProvider'

function App() {
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer saludo={'Brewery SA'}/>}></Route>
        <Route path="/detail/:id" element= {<ItemDetailContainer/>}></Route>
        <Route path="/category/:categoryName" element= {<ItemListContainer/>}></Route>
      </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
