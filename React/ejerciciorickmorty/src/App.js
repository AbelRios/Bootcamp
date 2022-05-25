import {useState, useEffect} from "react";
import List from "./components/List";
import './App.css';

function App() {

  const [list, setList] = useState(null);

  useEffect(function () {

      async function fetchApi() {
          const response = await fetch("https://rickandmortyapi.com/api/character");
          const json = await response.json();
          setList(json.results); 
      }
      fetchApi();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h2>Ejercicio API Rick & Morty</h2>
        <h3>Abel Rios</h3>
        <List list={list}/>
      </header>
    </div>
  );
}

export default App;
