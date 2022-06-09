import { Link } from "react-router-dom";
import { LOGOUT } from "../../config/routes/paths";

export default function Private(){
    return(
        <>
            <h1> Private </h1>
            <Link to={LOGOUT}> Cerrar Sesión </Link>
        </>
    )
}