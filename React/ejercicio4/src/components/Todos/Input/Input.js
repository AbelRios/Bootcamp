import { v4 as uuidv4 } from 'uuid';
import {useState} from 'react';

export default function Input(){

    const baseTodo = {
        id:"",
        title:"",
        completed:false
    }

    

    return(
        <form onSubmit={}>
            <div className="form-group">
                <label htmlFor="inputTitle"></label>
                <input name = "title" type="text"  value={} onChange={} className="form-control" placeholder="Introduce un nuevo To-do"/>
            </div>
        </form>
    )
    
}