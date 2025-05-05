import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';

function Education() {

  const [education, setEducation] = useState([]);
  
  useEffect(()=>{
    axios.get('http://localhost:5000/education')
    .then(res => setEducation(res.data))
    .catch(err => console.error("Error fetching education.", err));
  }, []);

  return (
    
    <>
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