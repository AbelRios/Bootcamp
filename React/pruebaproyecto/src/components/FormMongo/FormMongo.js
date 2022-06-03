import { useState } from "react";

export default function FormMongo() {

    const [persona, setPersona] = useState({
        nombre:"",
        apellido:"",
        edad:0
    })

    function handleInput(e){
        setPersona((persona) => ({
            ...persona,
            [e.target.name]:e.target.value
        }))
    }

    async function postApi() {

        let requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(persona)
        }
        await fetch(`http://localhost:3001/nuevapersona`, requestOptions);
    }

    async function handleSubmit(e){
        e.preventDefault();
        console.log(persona);
        await postApi();
    }


    return (

        <>
            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlFor="formControlName">Nombre</label>
                    <input
                        className="form-control"
                        id="formControlName"
                        type="text"
                        onChange={handleInput}
                        name="nombre"
                        placeholder="Default input"></input>

                </div>
                <div className="form-group">
                    <label htmlFor="formControlSurame">Apellido</label>
                    <input
                        className="form-control"
                        id="formControlSurame"
                        type="text"
                        onChange={handleInput}
                        name="apellido"
                        placeholder="Default input"></input>

                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Edad</label>
                    <input
                        type="number"
                        className="form-control"
                        name="edad"
                        onChange={handleInput}
                        placeholder="Edad" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>

    )
}