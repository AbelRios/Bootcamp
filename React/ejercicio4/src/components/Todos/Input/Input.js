import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

export default function Input({ handleTodos }) {

    const baseTodo = {
        id: "",
        title: "",
        completed: false
    }

    const [input, setInput] = useState(baseTodo);

    input.id = uuidv4();

    function handleInput(event) {

        setInput((input) => ({
            ...input,
            [event.target.name]: event.target.value,
        }))

    }

    function handleSubmit(event) {
        event.preventDefault();
        handleTodos((todos) => [input,...todos ])
        setInput(baseTodo);
    }




    return (
        <>
            <h2 className='mt-5'>To do list</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group d-flex">
                    <label htmlFor="inputTitle"></label>
                    <input name="title"
                        type="text"
                        value={input.title}
                        onChange={handleInput}
                        className="form-control"
                        placeholder="Introduce un nuevo To-do" />
                <button type="submit" className="btn btn-primary">Añadir</button>
                </div>
            </form>
        </>
    )

}