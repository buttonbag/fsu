import { Route, Routes } from "react-router";
import Departments from "./departments/Departments";
import Faculty from "./faculty/Faculty";
import Navbar from "./Navbar";
import Home from "./Home";
import FacultyDetails from "./faculty/FacultyDetails";
import DepartmentDetails from "./departments/DepartmentDetails";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"


function App() {

  return (
    <main className="container">
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />}/>
        <Route path="/faculty" element={<Faculty />}/>
        <Route path="/faculty/:id" element={<FacultyDetails />}/>
        <Route path="/departments" element={<Departments />}/>
        <Route path="/departments/:id" element={<DepartmentDetails />}/>
      </Routes>
    </main>
  )
}

export default App
