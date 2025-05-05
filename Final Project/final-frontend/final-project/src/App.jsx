import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Home from "./Home";
import Projects from "./Projects";
import Education from "./Education";
import Skills from "./Skills";
import Contact from "./Contact";

function App() {

  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/education" element={<Education />}></Route>
            <Route path="/skills" element={<Skills />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router> 
    </>
  )
}

export default App