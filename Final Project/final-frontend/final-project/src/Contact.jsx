import React from 'react';
import './App.css';

function Contact() {

  return (
    <>
      <div className="justify-center flex min-h-screen bg-neutral-200 flex-col items-center p-5 font-mono">
        <div className="max-w-3xl bg-white m-5 rounded-2xl shadow-md text-center p-5">
            <h1 className="font-bold">Contact Information</h1>
            <p>Full Name: Jose Isidro Garduno Pena</p>
            <p>Email: isrogar8@gmail.com</p>
            <p className="text-gray-900">LinkedIn: <a href="https://www.linkedin.com/in/jose-garduno-pena-963299252" className="hover:underline hover:text-blue-500" target="_blank">www.linkedin.com/in/jose-garduno-pena-963299252</a></p>
        </div>
      </div>
    </>
  )
}

export default Contact