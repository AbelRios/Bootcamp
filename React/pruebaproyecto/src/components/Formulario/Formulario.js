import { useState } from "react";

export default function Formulario() {

    const [datos, setDatos] = useState({
        idPersona: "",
        texto: ""
    });

    function handleInput(event) {
        setDatos((datos) => ({
            ...datos,
            [event.target.name]: event.target.value,
        }))
    }


    async function fetchApi() {
        
        let requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datos)
        };
        await fetch(`http://localhost:3001/nuevacarta`, requestOptions);
    }


    async function handleSubmit(event) {
        event.preventDefault();
        console.log(datos);
        await fetchApi();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="exampleFormControlInput1">idPersona</label>
                    <input
                        type="number"
                        className="form-control"
                        name="idPersona"
                        onChange={handleInput}
                        placeholder="idPersona" />
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Example textarea</label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        onChange={handleInput}
                        name="texto"
                        placeholder="Texto"
                        rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}