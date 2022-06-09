import { useState, useEffect } from "react";

export default function Home() {

    const [students, setStudents] = useState(null);

    useEffect(function () {
        async function fetchStudents() {
            const response = await fetch("http://localhost:3001/personas")
            const data = await response.json()
            setStudents(data);
        }
        fetchStudents();
    }, []);

    return (
        <>
            <h1> Home </h1>
            {students &&
             students.map((student) => <p key={student._id}>{student.nombre}</p>)}
        </>
    )
}