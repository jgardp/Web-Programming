import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';

function Navbar (){
    return (
        <nav>
            <ul className="flex flex-wrap text-center p-3 justify-center space-x-20 font-mono">
                <li className="hover:bg-slate-400 p-2 rounded-full hover:text-white"><Link to="/">Home</Link></li>
                <li className="hover:bg-slate-400 p-2 rounded-full hover:text-white"><Link to="/projects">Projects</Link></li>
                <li className="hover:bg-slate-400 p-2 rounded-full hover:text-white"><Link to="/education">Education</Link></li>
                <li className="hover:bg-slate-400 p-2 rounded-full hover:text-white"><Link to="/skills">Skills</Link></li>
                <li className="hover:bg-slate-400 p-2 rounded-full hover:text-white"><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar