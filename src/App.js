
import {BrowserRouter, Routes, Route, Navigate, Link} from 'react-router-dom'


import './App.css';

import { Header } from './Pages/HeaderWeb/Header';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './Pages/NavBar/BarraNav/NavBar';
import { Carrito } from './Pages/Carrito/Carrito';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ContextApp } from './context/ContextApp';
import { useState } from 'react';



function App() {

  return (
      <ContextApp.Provider value={[]}>
        <BrowserRouter>
          <NavBar/>
          <Header/>
          <Routes>
              <Route path='/' element={<ItemListContainer greeting="Bienvenido"/>}></Route>
              <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}></Route>
              <Route path='/detalle/:idProducto' element={<ItemDetailContainer/>}></Route>
              <Route path='/carrito' element={<Carrito/>}></Route>  
          </Routes>
  
        </BrowserRouter>
      </ContextApp.Provider>
      
    );  
}

  


export default App;
