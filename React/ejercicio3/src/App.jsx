import { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Agenda from './components/Agenda/Agenda';
import Formulario from './components/Formulario/Formulario';

const arrayAgenda = [
  {
    id: Date.now(),
    name: "James",
    surname: "Hook",
    address: "Boat St.",
    city: "Neverland",
    postCode: "001",
    phoneNumber: "666111222"
  },
  {
    id: Date.now(),
    name: "Jack",
    surname: "Sparrow",
    address: "Black Pearl St.",
    city: "Caribbean",
    postCode: "002",
    phoneNumber: "666333444"
  },
  {
    id: Date.now(),
    name: "Edward",
    surname: "Kenway",
    address: "Nassau St.",
    city: "La Habana",
    postCode: "003",
    phoneNumber: "666555666"
  }
]

function App() {

  // const [agenda, setAgenda] = useState(JSON.parse(localStorage.getItem('agenda')) || arrayAgenda);
  const [agenda, setAgenda] = useState(arrayAgenda);

  return (
    <div className="App">
      <header className="App-header">
        <p>Ejercicio 3 React</p>
        <p>Abel Rios</p>
        <Agenda contacts={agenda} handleDelete={setAgenda}/>
        <Formulario handleAgenda={setAgenda}/>
        {/* {localStorage.setItem('agenda', JSON.stringify(agenda))} */}
      </header>
    </div>
  );
}

export default App;
