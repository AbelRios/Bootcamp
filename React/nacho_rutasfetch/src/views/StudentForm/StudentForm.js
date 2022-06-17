import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CREATE_PERSON } from "../../api/settings";

export default function StudentForm() {
  const navigate = useNavigate();
  const [newStudent, setNewStudent] = useState({
    nombre: "",
    apellido: "",
    edad: "",
  });

  function handleInputs(e) {
    const { name } = e.target;
    setNewStudent((student) => ({ ...student, [name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const requestStudent = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newStudent),
    };

    await fetch(CREATE_PERSON, requestStudent);
    navigate("/");
  }
  return (
    <div>
      <h1>StudentForm</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newStudent.nombre}
          onChange={handleInputs}
          name="nombre"
        />
        <input
          type="text"
          value={newStudent.apellido}
          onChange={handleInputs}
          name="apellido"
        />
        <input
          type="number"
          value={newStudent.edad}
          onChange={handleInputs}
          name="edad"
        />
        <button>Añadir</button>
      </form>
    </div>
  );
}
