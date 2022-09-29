
import './App.css';
import { Header } from './components/HeaderWeb/Header';
import { ItemListContainer } from './components/ItemListContainer.js/ItemListContainer';
import { NavBar } from './components/NavBar/BarraNav/NavBar';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <ItemListContainer/>
    </div>
  );
  
}

export default App;
