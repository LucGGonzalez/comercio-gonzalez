import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer saludo={'Bienvenido'}/>}></Route>
        <Route path="/detail/:idItem" element= {<ItemDetailContainer/>}></Route>
        <Route path="/category/:idItem" element= {<ItemDetailContainer/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
