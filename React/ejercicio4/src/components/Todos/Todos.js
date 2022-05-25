import { useState, useEffect } from "react";
import Input from "./Input";

export default function Todos() {

    // const prueba = {
    //     id:33,
    //     title: "hola",
    //     completed:false
    // }

    const [todos, setTodos] = useState([]);

    useEffect(function () {

        async function fetchApi() {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos");
            const json = await response.json();
            setTodos(json.slice(0, 20)); // Aquí metemos en 'todos' sólo los 20 primeros objetos del array
        }
        fetchApi();
    }, [])

    function handleDelete(id){
        setTodos(todos.filter((item) => item.id !== id));
    }

    function toggleTodo(index) {
        
            let aux = [...todos];
            aux[index].completed = !aux[index].completed;
            setTodos(aux);
    }

    return (
        <>
            <div className="d-grid gap-3">
                <Input handleTodos={setTodos} />
                <ul className="list-group">
                    {
                        todos.map(({ id, title, completed }, index) => (

                            <li 
                            key={id}
                            className={`list-group-item mt-2 d-flex justify-content-between 
                            ${completed && "list-group-item-dark"}`}>
                                <input 
                                class="form-check-input me-1" 
                                type="checkbox" value="" 
                                checked={completed} 
                                onChange={()=>toggleTodo(index)}>
                                </input> 

                                <span className={`${completed && "text-decoration-line-through"}`}
                                >{index+1}: {title} </span>
                                
                                <button className="btn btn-danger" onClick={()=>handleDelete(id)}>X</button>
                            </li>

                            )
                        )
                    }
                </ul>
            </div>
        </>

    )
}