import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect} from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from 'axios';

function Personal() {

  const [personal, setPersonal] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/personal").then((response) => {
      setPersonal(response.data);
  });
  }, []);

  return (
    <>
        <div>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>

            <h1>Vite + React</h1>

            {personal.map(info => (
                <div key={info.id} style={{border: '1px solid #ccc', padding: '10px', marginBottom: '15px'}}>
                  <p>{info.name}, {info.age}, {info.birthday}</p>
                </div>
            ))}

        </div>
    </>
  )
}

export default Personal
