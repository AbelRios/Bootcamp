import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  UPDATE_PERSON,
  DELETE_SINGLE_PERSON,
  GET_SINGLE_PERSON,
} from "../../api/settings";

export default function StudentProfile() {
  const [student, setStudent] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  const { id } = params;

  useEffect(
    function () {
      async function fetchStudent() {
        const response = await fetch(GET_SINGLE_PERSON.replace("<ID>", id));
        const student = await response.json();
        setStudent(student);
      }
      fetchStudent();
    },
    [id]
  );

  async function removeStudent(name) {
    await fetch(DELETE_SINGLE_PERSON.replace("<NAME>", name), {
      method: "DELETE",
    });
    navigate("/");
  }

  function handleInputs(e) {
    const { name } = e.target;
    setStudent((student) => ({ ...student, [name]: e.target.value }));
  }

  async function handleSubmit(e) {
    const requestStudent = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    };
    await fetch(UPDATE_PERSON, requestStudent);
    setIsEditing(false);
  }

  return (
    <div>
      <h1>Student profile</h1>
      {student && (
        <>
          {isEditing ? (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={student.nombre}
                onChange={handleInputs}
                name="nombre"
              />
              <input
                type="text"
                value={student.apellido}
                onChange={handleInputs}
                name="apellido"
              />
              <input
                type="number"
                value={student.edad}
                onChange={handleInputs}
                name="edad"
              />
              <button type="submit">Guardar</button>
            </form>
          ) : (
            <>
              <p>{student.nombre}</p>
              <p>{student.apellido}</p>
              <p>{student.edad}</p>
              <button onClick={() => removeStudent(student.nombre)}>
                Eliminar
              </button>
              <button onClick={() => setIsEditing(true)}>Editar</button>
            </>
          )}
        </>
      )}
    </div>
  );
}
