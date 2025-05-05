import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';

import react from './assets/react.png';
import tailwind from './assets/tailwind.png';
import mongodb from './assets/mongodb.png';
import express from './assets/express.png';
import web from './assets/web.jpg';

import Navbar from "./Navbar";

function Skills() {

  const [skills, setSkills] = useState([]);
  
  useEffect(()=>{
    axios.get('http://localhost:5000/skills')
    .then(res => setSkills(res.data))
    .catch(err => console.error("Error fetching skills.", err));
  }, []);

  return ( 
    <>
      <Navbar/>
      <div className="justify-center flex bg-neutral-200 items-center pt-5 space-x-5">
        <a href="https://react.dev/" target="_blank"><img className="w-20 h-20 rounded-full mb-2" src={react} alt="logo"></img></a>
        <a href="https://tailwindcss.com/" target="_blank"><img className="w-20 h-20 rounded-full mb-2" src={tailwind} alt="logo"></img></a>
        <a href="https://www.mongodb.com/" target="_blank"><img className="w-20 h-20 rounded-full mb-2" src={mongodb} alt="logo"></img></a>
        <a href="https://expressjs.com/" target="_blank"><img className="w-20 h-20 rounded-full mb-2" src={express} alt="logo"></img></a>
        <a href="https://www.w3schools.com/html/html_css.asp" target="_blank"><img className="w-20 h-20 rounded-full mb-2" src={web} alt="logo"></img></a>
      </div>
      <div className="justify-center flex min-h-screen bg-neutral-200 flex-col items-center p-3 font-mono">
        {skills.map(data => (
            <div key={data.id} className="max-w-3xl bg-white m-5 rounded-2xl shadow-md text-center p-3">
              <p className="font-bold">Skill: {data.name}</p>
              <p>Proficiency: {data.level}</p>
            </div>
        ))}
      </div>
    </>
  )
}

export default Skills