import { Route, Routes } from "react-router";
import Departments from "./departments/Departments";
import Faculty from "./faculty/Faculty";
import Navbar from "./Navbar";
import Home from "./Home";

function App() {

  return (
    <>
      <Navbar />

      
      <Routes>
        <Route index path="/" element={<Home />}/>
        <Route path="/faculty" element={<Faculty />}/>
        <Route path="/departments" element={<Departments />}/>
      </Routes>
    </>
  )
}

export default App
