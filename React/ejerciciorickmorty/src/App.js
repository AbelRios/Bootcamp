import {useState, useEffect} from "react";
import List from "./components/List";
import Navbar from "./components/Navbar";
import './App.css';
import Pagination from "./components/Pagination";

function App() {

  const [list, setList] = useState(null);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(0);
  const [searchName, setSearchName] = useState("");

  useEffect(function () {

    setTimeout(function(){

      async function fetchApi() {
          const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${searchName.name}`);
          const json = await response.json();
          setList(json.results); // Aquí nos quedamos sólo con la parte "results" de datos
          setMaxPage(json.info.pages);
      }
      fetchApi();

    },1000)
    
    return setList([]); // Aquí estamos haciendo la limpieza del evento/efecto

  }, [page,searchName]) // Aquí ponemos 'page' para que realice el useEffect a cada vez que page es modificada

  return (
    <div className="App">
      <header className="App-header">
      <Navbar setList={setList} page={page} setMaxPage={setMaxPage} setSearchName={setSearchName}/>
        <br></br>
        <Pagination page={page} setPage={setPage} maxPage={maxPage}/>
        <List list={list} setList={setList}/>
      </header>
    </div>
  );
}

export default App;
