import { Outlet, Navigate } from "react-router-dom";
import {PRIVATE} from "../../config/routes/paths";
import { useAuthContext } from "../../contexts/AuthContext";

export default function PublicRoute(){
    
    const {isAuthenticated} = useAuthContext();

    if(isAuthenticated){
        return <Navigate to={PRIVATE} />
    }

    return (
        <Outlet/>
    )

}


