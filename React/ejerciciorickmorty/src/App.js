import { useUserLoginContext } from "./contexts/UserLoginContext";
import Layout from "./components/Layout/";
import Login from "./components/Login/Login";
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Link,
  useParams,
  useNavigate
} from "react-router-dom";

function App() {

  const { user } = useUserLoginContext();

  return (
    <>
      {user ? <Layout/> : <Login/>}
    </>
  );
}

export default App;
