
import './App.css';
import { Header } from './components/HeaderWeb/Header';
import { ItemListContainer } from './components/ItemListContainer.js/ItemListContainer';
import CartWidget from './components/NavBar/BarraNav/CartWidget';
import { NavBar } from './components/NavBar/BarraNav/NavBar';


function App() {

  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <ItemListContainer greeting="Bienvenido"/>
    </div>
  );
  
}

export default App;
