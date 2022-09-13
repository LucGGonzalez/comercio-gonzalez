import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  const stock = 10
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer saludo={'Bienvenido'}/>}></Route>
      </Routes>
        <ItemCount stock={stock}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
