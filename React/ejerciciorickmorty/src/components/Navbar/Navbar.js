import { useState } from "react"
import { useDarkModeContext } from "../../contexts/DarkModeContext";

export default function Navbar({ setPage, setSearchCharacter }) {

    const baseSearch = {
        name: "",
        species: "",
        status: ""
    }

    const [search, setSearch] = useState(baseSearch);


    function handleSearch(event) {

        setSearch((search) => ({
            ...search,
            [event.target.name]: event.target.value,
        }))
    }

    function handleSubmit(event) {
        event.preventDefault();
        setSearchCharacter(search);
        setPage(1);
    }

    const { toggleDarkMode } = useDarkModeContext();

    return (
        <>
            <nav class="navbar navbar-light bg-dark w-100">
                <div class="container-fluid">
                <button 
                    type="button" 
                    className="btn btn-secondary"
                    onClick={() => {setSearchCharacter(baseSearch); setPage(1)}}
                    >Home</button>
                    <div class="form-check form-switch">
                        <input 
                            class="form-check-input" 
                            type="checkbox" 
                            id="flexSwitchCheckDefault"
                            onChange={ toggleDarkMode }
                            />
                            <label 
                            class="form-check-label" 
                            for="flexSwitchCheckDefault"
                            >Dark/Light Mode</label>
                    </div>
                    <form class="d-flex" onSubmit={handleSubmit}>
                        <input class="form-control me-2"
                            name="name"
                            type="search"
                            onChange={handleSearch}
                            placeholder="Nombre"
                            aria-label="Search" />
                        <select 
                            className="form-select me-2"
                            name="species"
                            onChange={handleSearch}>
                            <option selected value="">Species</option>
                            <option value="Human">Human</option>
                            <option value="Humanoid">Humanoid</option>
                            <option value="Alien">Alien</option>
                            <option value="Poopybutthole">Poopybutthole</option>
                            <option value="Animal">Animal</option>
                            <option value="Mythological">Mythological</option>
                            <option value="Robot">Robot</option>
                            <option value="Cronenberg">Cronenberg</option>
                            <option value="Planet">Planet</option>
                            <option value="Disease">Disease</option>
                            <option value="Unknown">Unknown</option>
                        </select>
                        <select class="form-select me-2"
                            name="status"
                            onChange={handleSearch}>
                            <option value="" selected>Status</option>
                            <option value="Alive">Alive</option>
                            <option value="Dead">Dead</option>
                            <option value="Unknown">Unknown</option>
                        </select>
                        <button class="btn btn-secondary"
                            type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    )
}