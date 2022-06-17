import { useMemo } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GET_ALL_PEOPLE } from "../../api/settings";
import useFetch from "../../hooks/useFetch";
export default function Home() {
  const [students, setStudents] = useState(null);

  const allStudents = useFetch(GET_ALL_PEOPLE);

  useEffect(
    function () {
      setStudents(allStudents);
    },
    [allStudents]
  );

  return (
    <div>
      <h1>Home</h1>
      {students &&
        students.map((student) => (
          <div key={student._id}>
            <Link to={`/profile/${student._id}`}>
              <p>{student.nombre}</p>
            </Link>
          </div>
        ))}
    </div>
  );
}
