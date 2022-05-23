import './App.css';

import { useState } from "react";


export default function App() {
  
  const [students, setStudents] = useState([]); 
  //guardar los estudiantes que vayamos añadiendo con el formulario
  const [student, setStudent] = useState(""); 
  //guarda lo que el usuario escribe en el input

  function handleSubmit(event) {
    event.preventDefault(); 
    //evitar el comportamiento por defecto de los formularios, actualizar la pagina
    setStudents((currentStudents) => [student, ...currentStudents]);
    setStudent("");
  }

  function handleStudent(event) {
    setStudent(event.target.value);
  }

  return (
    <div className="App">
      <h1>Hello UseState with form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Introduce tu nombre"
          value={student}
          onChange={handleStudent}
        />
        <button type="submit">Añadir</button>
      </form>
      <ul>
        {students.map((student) => (
          <li key={student}>{student}</li>
        ))}
      </ul>
    </div>
  );
}
