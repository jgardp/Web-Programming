import './App.css'
import profile from './assets/profile.png'

function App() {
 
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
            <p className="text-gray-700">Email: <a href="#" className="hover:underline">jgardunopena@atu.edu</a></p>
          </div>
          
          <div className="max-w-3xl bg-white m-5 rounded-2xl shadow-md text-center p-5">
            <h2 className="text-gray-700">Education:</h2>
            <ul className="text-gray-700 mb-2 list-disc list-inside">
              <li>
                Associates in Information Technology
              </li>
              <li>
                Associates in Cybersecurity
              </li>
              <li>    
                Associates in General Studies
              </li>
              <li>
                Certificate in Computer Programming
              </li>
              <li>
                Certificate in Computer Networking
              </li>   
            </ul>
          </div>
        </main>
        <footer className="w-full text-center mt-1 mb-2">
          <button className="bg-blue-400 text-white hover:bg-blue-600 p-1 rounded-md mt-3 shadow-md">Check out my other website!</button>
        </footer>
      </div>
    </>
  )
}

export default App
