import React from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Chat from './pages/Chat/Chat'
import ProfileUpdate from './pages/ProfileUpdate/ProfileUpdate'

import Login from './pages/Login/Login'
import Sign_up from './pages/Sign_up/Sign_up'
import Login_Navbar from './components/loginNavBar/Login_Navbar'
import Features from './pages/Features/Features'
import DesktopApp from './pages/DesktopApp/DesktopApp'
import Privacy from './pages/Privacy/Privacy'


import InfoSection from './components/InfoSection/InfoSection';

const App = () => {
  const location = useLocation()
  const showNavbar = location.pathname !== '/chat';
  return (
    <>
      {showNavbar ? <Login_Navbar /> : <></>}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Sign_up />} />
        <Route path='/features' element={<Features />} />
        <Route path='/desktop-app' element={<DesktopApp />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/profile' element={<ProfileUpdate />} />
      </Routes>
    </>
  )
}



export default App