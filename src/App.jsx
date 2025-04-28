import './App.css'
import HomePage from './components/HomePage'
import { Routes, Route } from 'react-router-dom'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import Navbar from './components/Navbar'
import Certificates from './pages/Certificates'
import  Contact  from './pages/Contact'
import Achievements from './pages/Achievements'
import Skills from './pages/Skills'

function App() {


  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-blue-900 text-white">
      <Navbar/>
     
   <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/certifications" element={<Certificates/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/achievements" element={<Achievements/>} />
        <Route path="/contact" element={<Contact/>} />
      
       </Routes>
      
   </div>
    </>
  )
}

export default App
