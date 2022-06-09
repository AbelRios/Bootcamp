import { useState, useEffect } from "react";
import List from "../../components/List";
import Navbar from "../../components/Navbar";
import Pagination from "../../components/Pagination";
import { useDarkModeContext } from "../../contexts/DarkModeContext";

export default function Home() {

    const [list, setList] = useState(null);
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(0);
    const [searchCharacter, setSearchCharacter] = useState({
        name: "",
        status: "",
        species: ""
    });

    useEffect(function () {

        setTimeout(function () {

            async function fetchApi() {
                const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${searchCharacter.name}&species=${searchCharacter.species}&status=${searchCharacter.status}`);
                if (response.status === 200) {
                    const json = await response.json();
                    setList(json.results); // Aquí nos quedamos sólo con la parte "results" de datos
                    setMaxPage(json.info.pages);
                } else {
                    console.log("No hay datos");
                }
            }
            fetchApi();
        }, 1000)

        return setList([]); // Aquí estamos haciendo la limpieza del evento/efecto

    }, [page, searchCharacter])
    // Aquí ponemos 'page' y otros para que realice el useEffect a cada vez que alguno sea modificado

    const { darkMode } = useDarkModeContext();

    return (
        <div className="App">
            <Navbar setPage={setPage} setSearchCharacter={setSearchCharacter} />
            <header className={darkMode ? "App-header-dark" : "App-header-light"}>
                <br></br>
                <Pagination page={page} setPage={setPage} maxPage={maxPage} />
                <List list={list} setList={setList} />
            </header>
        </div>
    );
}

