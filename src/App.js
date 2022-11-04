import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './Pages/NavBar/BarraNav/NavBar';
import { Cart } from './Pages/Carrito/Carrito';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import CartContextProvider from './context/ContextApp';


function App() {

  return (
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
              <Route path='/' element={<ItemListContainer greeting="Bienvenido"/>}></Route>
              <Route path='/categoria/:idCategory' element={<ItemListContainer/>}></Route>
              <Route path='/detalle/:idProduct' element={<ItemDetailContainer/>}></Route>
              <Route path='/cart' element={<Cart/>}></Route>  
          </Routes>
        </BrowserRouter>
        </CartContextProvider>
      
    );  
}

  


export default App;
