import { useState, useEffect } from "react";
import { DarkModeContextProvider } from "./contexts/DarkModeContext";
import Layout from "./components/Layout/Layout";
import "./App.css";
function App() {
  const searchBase = {
    name: "",
    status: "",
    species: "",
  };

  const [list, setList] = useState(null);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(0);
  const [searchCharacter, setSearchCharacter] = useState(searchBase);

  useEffect(
    function () {
      setTimeout(function () {
        async function fetchApi() {
          const response = await fetch(
            `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchCharacter.name}&species=${searchCharacter.species}&status=${searchCharacter.status}`
          );
          const json = await response.json();
          setList(json.results); // Aquí nos quedamos sólo con la parte "results" de datos
          setMaxPage(json.info.pages);
        }
        fetchApi();
      }, 1000);

      return setList([]); // Aquí estamos haciendo la limpieza del evento/efecto
    },
    [page, searchCharacter]
  );
  // Aquí ponemos 'page' y otros para que realice el useEffect a cada vez que alguno sea modificado

  return (
    <DarkModeContextProvider>
      <Layout
        setList={setList}
        list={list}
        setPage={setPage}
        page={page}
        maxPage={maxPage}
        setSearchCharacter={setSearchCharacter}
      />
    </DarkModeContextProvider>
  );
}

export default App;
