import {useState, useEffect} from "react";
import List from "./components/List";
import './App.css';
import Pagination from "./components/Pagination/Pagination";

function App() {

  const [list, setList] = useState(null);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(0);

  useEffect(function () {

      async function fetchApi() {
          const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
          const json = await response.json();
          setList(json.results); // Aquí nos quedamos sólo con la parte "results" de datos
          setMaxPage(json.info.pages);
      }
      fetchApi();
  }, [page]) // Aquí ponemos 'page' para que realice el useEffect a cada vez que page es modificada

  return (
    <div className="App">
      <header className="App-header">
        <h2>Ejercicio API Rick & Morty</h2>
        <h3>Abel Rios</h3>
        <br></br>
        <Pagination page={page} setPage={setPage} maxPage={maxPage}/>
        <List list={list} setList={setList}/>
      </header>
    </div>
  );
}

export default App;
