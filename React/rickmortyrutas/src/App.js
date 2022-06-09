import Layout from "./components/Layout/";
import Home from "./Views/Home";
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

  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
                
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;