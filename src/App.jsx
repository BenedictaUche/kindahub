import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Navbar from './Components/Nav/Navbar'
import Home from './Pages/Home/Home'
import Landing from './Pages/Landing/Landing'
import About from './Pages/About/Aboutus'
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/Register'

function App() {
  return (
    <>
      <Router>

      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      </Router>
    </>
  )
}

export default App
