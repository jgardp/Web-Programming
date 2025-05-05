import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

import nextjs from './assets/nextjs.png';
import expo from './assets/expo.png';
import react from './assets/react.png';
import postgre from './assets/postgre.png';
import tailwind from './assets/tailwind.png';
import mongodb from './assets/mongodb.png';
import express from './assets/express.png';

import Navbar from "./Navbar";

function Projects() {

  const [projects, setProjects] = useState([]);
  
  useEffect(()=>{
    axios.get('http://localhost:5000/projects')
    .then(res => setProjects(res.data))
    .catch(err => console.error("Error fetching projects.", err));
  }, []);

  return (
    <>
        <Navbar/>
        <div className="justify-center flex bg-neutral-200 items-center pt-5 space-x-5">
            <a href="https://nextjs.org/" target="_blank"><img className="w-20 h-20 rounded-full mb-2 hover:border-2" src={nextjs} alt="logo"></img></a>
            <a href="https://expo.dev/go" target="_blank"><img className="w-20 h-20 rounded-full mb-2 hover:border-2" src={expo} alt="logo"></img></a>
            <a href="https://react.dev/" target="_blank"><img className="w-20 h-20 rounded-full mb-2 hover:border-2" src={react} alt="logo"></img></a>
            <a href="https://tailwindcss.com/" target="_blank"><img className="w-20 h-20 rounded-full mb-2 hover:border-2" src={tailwind} alt="logo"></img></a>
            <a href="https://www.postgresql.org/" target="_blank"><img className="w-20 h-20 rounded-full mb-2 hover:border-2" src={postgre} alt="logo"></img></a>
            <a href="https://www.mongodb.com/" target="_blank"><img className="w-20 h-20 rounded-full mb-2 hover:border-2" src={mongodb} alt="logo"></img></a>
            <a href="https://expressjs.com/" target="_blank"><img className="w-20 h-20 rounded-full mb-2 hover:border-2" src={express} alt="logo"></img></a>
        </div>
      
        <div className="justify-center flex min-h-screen bg-neutral-200 flex-col items-center p-5 font-mono">
          {projects.map(project => (
            <div key={project.id} className="max-w-3xl bg-white m-5 rounded-2xl shadow-md text-center p-5">
              <p className="font-bold">Project: {project.title}</p>
              <p>Description: {project.description}</p>
              <p>Technologies: {project.technologies}</p>
              <p>Github: {project.link}</p>
            </div>
          ))}
      </div>
    </>
  )
}

export default Projects