import Login from "../Login";
import { Outlet } from "react-router-dom";
import { useUserLoginContext } from "../../contexts/UserLoginContext";


export default function Layout() {

  const { user } = useUserLoginContext();

  return (
    <>
      {user ? <Outlet/> : <Login/>}
    </>
  );
}

