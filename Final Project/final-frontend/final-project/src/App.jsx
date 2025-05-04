import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import profile from './assets/profile.png';

function App() {

  const [projects, setProjects] = useState([]);
  
  useEffect(()=>{
    axios.get('http://localhost:5000/projects')
    .then(res => setProjects(res.data))
    .catch(err => console.error("Error fetching projects.", err));
  }, []);

  return (
    <>
      <div className="justify-center flex min-h-screen bg-gray-100 flex-col items-center p-5 font-mono">
        <header className="text-center m-5">
          <h1 className="font-bold text-gray-900 text-4xl">Jose Isidro Garduno Pena</h1>
        </header>
        <img className="w-45 h-45 rounded-full mb-2" src={profile} alt="profile image"></img>
        <main>
          <div className="max-w-3xl bg-white m-5 rounded-2xl shadow-md text-center p-5">
            <p className="text-gray-700 mb-2">Bio: 24 year old student currently studying Information Technology at Arkansas Tech University.</p>
          </div>
      
          <div className="max-w-3xl bg-white m-5 rounded-2xl shadow-md text-center p-5">
            <p className="text-gray-700">Email: <a href="#" className="hover:underline">isrogar8@gmail.com</a></p>
          </div>

          {projects.map(project => (
            <div key={project.id} className="max-w-3xl bg-white m-5 rounded-2xl shadow-md text-center p-5">
              <p>{project.title}</p>
            </div>
          ))}
        </main>
        <footer className="w-full text-center mt-1 mb-2">
        </footer>
      </div>
    </>
  )
}

export default App
