import { useState, useEffect} from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from 'axios';

function Hobbies() {

  const [hobbies, setHobbies] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/hobbies").then((response) => {
        setHobbies(response.data);
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

            {hobbies.map(info => (
                <div key={info.id} style={{border: '1px solid #ccc', padding: '10px', marginBottom: '15px'}}>
                  <h3>{info.hobby_name}</h3>
                  <p>{info.hobby_description}</p>
                </div>
            ))}

        </div>
    </>
  )
}

export default Hobbies