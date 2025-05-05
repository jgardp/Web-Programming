import React from 'react';
import './App.css';
import profile from './assets/profile.png';

function Home() {

  return (
    <>
      <div className="justify-center flex min-h-screen bg-neutral-200 flex-col items-center p-5 font-mono">
        <header className="text-center m-5">
          <h1 className="font-bold text-slate-800 text-4xl">Jose Isidro Garduno Pena</h1>
        </header>
        <img className="w-45 h-45 rounded-full mb-2" src={profile} alt="profile image"></img>
        <main>
          <div className="max-w-3xl bg-white m-5 rounded-2xl shadow-md text-center p-5">
            <p className="text-gray-900 mb-2">Bio: 24 year old student currently studying Information Technology at Arkansas Tech University. Previous attended North Arkansas College to obtain Associates in General Studies. Worked for a year at Walmart as a order delivery employee.</p>
          </div>
      
          <div className="max-w-3xl bg-white m-5 rounded-2xl shadow-md text-center p-5">
            <p className="text-gray-900">LinkedIn: <a href="https://www.linkedin.com/in/jose-garduno-pena-963299252" className="hover:underline hover:text-blue-500" target="_blank">www.linkedin.com/in/jose-garduno-pena-963299252</a></p>
          </div>
        </main>
      </div>
    </>
  )
}

export default Home