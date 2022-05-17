import Alumno from "../Alumno/Alumno"

export default function Alumnos({alumnos}) { // donde alumnos va a ser un array de {alumno}

    return( // react no se lleva guay con los métodos de los array, para ello usamos un fragment <></>
        <>
            {
                alumnos.map((student) => (<Alumno key= {student.nombre} alumno = {student}/>))
                // Aquí estamos usando el map como si fuese un forEach que te devuelve (return) cosas

                // Ponemos el componente Alumno para que nos lo transforme en el ul + los li
                // como hemos definido en el componente Alumno
                // y usamos el nombre (que se supone que es el id) como key
            }
        </>
    )

}
