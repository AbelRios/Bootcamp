import logo from './logo.svg';
import './App.css';

const arrayContacts = [
  {
    name: "James",
    surname: "Hook",
    address: "Boat St.",
    city: "Neverland",
    postalCode: "001",
    phoneNumber: "666111222"
  },
  {
    name: "Jack",
    surname: "Sparrow",
    address: "Black Pearl St.",
    city: "Caribbean",
    postalCode: "002",
    phoneNumber: "666333444"
  },
  {
    name: "Edward",
    surname: "Kenway",
    address: "Nassau St.",
    city: "Cuba",
    postalCode: "003",
    phoneNumber: "666555666"
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Ejercicio 3 React</p>
        <p>Abel Rios</p>
      </header>
    </div>
  );
}

export default App;
