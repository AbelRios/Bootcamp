import { useState, useEffect } from "react"

export default function Navbar({setList, page, setMaxPage, setSearchName}) {

    const baseSearch = {
        name:""
    }

    const [search, setSearch] = useState(baseSearch);
    

    function handleSearch(event){

        setSearch((search) => ({
            ...search,
            [event.target.name]: event.target.value,
        }))
    }

    function handleSubmit(event){
        event.preventDefault();
        setSearchName(search);
    }

    // useEffect(function () {

    //     async function fetchApi() {
    //         const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${searchName.name}`);
    //         const json = await response.json();
    //         setList(json.results); // Aquí nos quedamos sólo con la parte "results" de datos
    //         console.log(searchName.name);
    //         setMaxPage(json.info.pages);
    //     }
    //     fetchApi();
  
    // }, [searchName])


    return (
        <>
        <nav class="navbar navbar-light bg-dark w-100">
            <div class="container-fluid">
            <a href="#" class="navbar-brand text-light">Ejercicio API Rick & Morty - Abel Rios</a>
                <form class="d-flex" onSubmit={handleSubmit}>
                    <input class="form-control me-2" 
                    name="name"
                    type="search" 
                    onChange={handleSearch}
                    placeholder="Nombre" 
                    aria-label="Search"/>
                    <button class="btn btn-outline-light" 
                    type="submit">Search</button>
                </form>
            </div>
        </nav>
        </>
    )
}