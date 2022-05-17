import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Alumno from './components/Alumno';
import Alumnos from './components/Alumnos';

const alumnos = [
{ 
  nombre: "Abel Rios",
  edad:31,
  telefono: "666666666",
  email: "abel@mail.com"
},
{ 
  nombre: "Bilbo Bolsón",
  edad:31,
  telefono: "666666666",
  email: "abel@mail.com"
},
{ 
  nombre: "Jack Sparrow",
  edad:31,
  telefono: "666666666",
  email: "abel@mail.com"
},
{ 
  nombre: "Ramon García",
  edad:31,
  telefono: "666666666",
  email: "abel@mail.com"
}
]

const name = "Abel";

function App() {
  return (
    <>
      <p> Header </p>
      <header className="App-header">
        <Title name = {name}/>
        <Alumnos alumnos={alumnos}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p> Footer </p>
    </>
  );
}

export default App;
