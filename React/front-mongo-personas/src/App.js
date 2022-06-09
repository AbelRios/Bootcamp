import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './views/Home';
import StudentForm from "./views/StudentForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/form" element={<StudentForm/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
