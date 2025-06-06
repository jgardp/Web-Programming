import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';

import nac from './assets/nac.jpg';
import atu from './assets/atu.jpg';

import Navbar from "./Navbar";

function Education() {

  const [education, setEducation] = useState([]);
  
  useEffect(()=>{
    axios.get('http://localhost:5000/education')
    .then(res => setEducation(res.data))
    .catch(err => console.error("Error fetching education.", err));
  }, []);

  return (
    
    <>
    <Navbar/>
    <div className="justify-center flex bg-neutral-200 items-center pt-5 space-x-5">
      <a href="https://www.northark.edu/" target="_blank"><img className="w-20 h-20 rounded-full mb-2 hover:border-2" src={nac} alt="logo"></img></a>
      <a href="https://www.atu.edu/" target="_blank"><img className="w-20 h-20 rounded-full mb-2 hover:border-2" src={atu} alt="logo"></img></a>  
    </div>
      <div className="justify-center flex min-h-screen bg-neutral-200 flex-col items-center p-5 font-mono">
        {education.map(data => (
            <div key={data.id} className="max-w-3xl bg-white m-5 rounded-2xl shadow-md text-center p-5">
              <p className="font-bold">Degree: {data.degree}</p>
              <p>Description: {data.description}</p>
              <p>Institution: {data.institution}</p>
              <p>Graducation Year: {data.year}</p>
            </div>
        ))}
      </div>
    </>
  )
}

export default Education