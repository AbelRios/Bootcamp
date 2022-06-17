import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import StudentForm from "./views/StudentForm";
import StudentProfile from "./views/StudentProfile";
import { HOME, STUDENT_FORM, STUDENT_PROFILE } from "./config/routes/paths";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={STUDENT_FORM} element={<StudentForm />} />
        <Route path={STUDENT_PROFILE} element={<StudentProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
