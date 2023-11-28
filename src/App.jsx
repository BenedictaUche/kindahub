import React from 'react';
import { Routes, Route, BrowserRouter as Router, useLocation } from 'react-router-dom';
import Navbar from './Components/Nav/Navbar';
import AuthNav from './Components/Nav/AuthNav';
import Home from './Pages/Home/Home';
import HomeDetails from './Pages/Home/HomeDetails';
import Landing from './Pages/Landing/Landing';
import About from './Pages/About/Aboutus';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import Help from './Pages/Help/Help';
import Reward from './Pages/Rewards/Reward';
import Profile from './Pages/Profile/Profile';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  const isAuthPage = location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/';
  const navComponent = isAuthPage ? <AuthNav /> : <Navbar />;

  return (
    <>
      {navComponent}
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/home/:id' element={<HomeDetails />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/help' element={<Help />} />
        <Route path='/reward' element={<Reward />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
