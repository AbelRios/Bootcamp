import { Link } from "react-router-dom";
import { LOGIN } from "../../config/routes/paths";


export default function Home(){
    return(
        <>
            <h1> Home </h1>
            <Link to={LOGIN}> Iniciar Sesión </Link>
        </>
    )
}