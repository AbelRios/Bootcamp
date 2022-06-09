import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Logout from "./views/Logout";
import Private from "./views/Private";
import { HOME, LOGIN, PRIVATE, LOGOUT } from "./config/routes/paths";
import AuthContextProvider from "./contexts/AuthContext";
import PublicRoute from "./components/Router/PublicRoute";
import PrivateRoute from "./components/Router/PrivateRoute";


function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
        <Route path={HOME} element={<PublicRoute/>}>
          <Route index element={<Home />} />
          <Route path={LOGIN} element={<Login />} />
        </Route>
        <Route path={PRIVATE} element={<PrivateRoute/>}>
          <Route index element={<Private />} />
          <Route path={LOGOUT} element={<Logout />} />
        </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;

