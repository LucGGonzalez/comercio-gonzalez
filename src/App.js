import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  const stock = 10
  return (
    <div className="App">

        <NavBar/>

        <ItemListContainer saludo={'Bienvenido'}/>
        <ItemCount stock={stock}/>
    </div>
  );
}

export default App;
