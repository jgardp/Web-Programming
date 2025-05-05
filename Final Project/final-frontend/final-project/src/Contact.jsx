import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

function Contact() {

  const [contact, setContact] = useState([]);
  const [form, setForm] = useState({name:'', email:'', message:'', timestamp:''});

  useEffect(()=>{
    axios.get('http://localhost:5000/contact')
    .then(res => setContact(res.data))
    .catch(err => console.error("Error fetching message.", err));
  }, []);
  
  const handleChange = (e) =>{
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/contact', form)
    .then(res => {
      setContact([...contact, res.data]);
      setForm({name:'', email:'', message:'', timestamp:''});
    })
    .catch(err => console.error("Error submitting the post:",err));
  };

  return (
    <>
      <div className="justify-center flex min-h-screen bg-neutral-200 flex-col items-center p-5 font-mono">
        <div className="max-w-3xl bg-white m-5 rounded-2xl shadow-md text-center p-5">
            <h1 className="font-bold">My Contact Information</h1>
            <p>Full Name: Jose Isidro Garduno Pena</p>
            <p>Email: isrogar8@gmail.com</p>
            <p className="text-gray-900">LinkedIn: <a href="https://www.linkedin.com/in/jose-garduno-pena-963299252" className="hover:underline hover:text-blue-500" target="_blank">www.linkedin.com/in/jose-garduno-pena-963299252</a></p>
        </div>
        <div className="max-w-3xl bg-white m-5 rounded-2xl shadow-md text-center p-3">
            <h1 className="font-bold">Contact Form</h1>
            <form onSubmit={handleSubmit} style={{marginBottom:'2rem'}}>
                <input
                name = "name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                className="p-2 mb-2 w-full "
                />

                <input
                name = "email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                className="p-2 mb-2 w-full"
                />

                <input
                name = "timestamp"
                placeholder="Enter the date"
                value={form.timestamp}
                onChange={handleChange}
                className="p-2 mb-2 w-full"
                />

                <textarea
                name="message"
                placeholder="Enter you message"
                value={form.message}
                onChange={handleChange}
                className="p-2 mb-2 w-full"
                />

                <button type="submit" className="text-white bg-slate-500 hover:bg-slate-700 rounded-lg p-2 mt-3">Submit Post</button>
            </form>
        </div>
      </div>
    </>
  )
}

export default Contact