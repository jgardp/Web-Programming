import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';

import Personal from "./Personal";
import Hobbies from "./Hobbies";

function App() {

  return (
    <>
      <Router>
          <Routes>
            <Route path="/personal" element={<Personal />}></Route>
            <Route path="/hobbies" element={<Hobbies />}></Route>  
        </Routes>
      </Router>        
    </>
  )
}

export default App
