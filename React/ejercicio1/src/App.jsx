import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Card from './components/Card/Card';

const tarjeta = {
  img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/GANDALF.jpg/800px-GANDALF.jpg",
  titulo: "Gandalf el Gris",
  texto: "Un mago nunca llega tarde, Frodo Bolsón, ni pronto. Llega justamente cuando se lo propone.",
  enlace:"https://es.wikipedia.org/wiki/Gandalf",
  textoBoton: "Ficha de Wikipedia"
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <br></br>
        <p>Ejercicio 1 de React - Tarjeta con Props</p>
        <p>Abel Rios</p>
        <br></br>
        <Card tarjeta={tarjeta}/>
        <br></br>
      </header>
    </div>
  );
}

export default App;
