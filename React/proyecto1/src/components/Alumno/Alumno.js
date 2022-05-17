export default function Alumno({alumno}) {

    return(
        <ul>
            <li>{alumno.nombre}</li>
            <li>{alumno.edad}</li>
            <li>{alumno.email}</li>
            <li>{alumno.telefono}</li>
        </ul>
    )

}
