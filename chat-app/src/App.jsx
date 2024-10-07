import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Login from './pages/Login/Login'
// import Chat from './pages/Chat/Chat'
// import ProfileUpdate from './pages/ProfileUpdate/ProfileUpdate'
// import SideNav from './components/left/SideNav'
// import ChatList from './components/ChatList/ChatList'
import MainLayout from './components/left_layout/Layout'; 



const App = () => {
  return (

    <>
      <Routes>
        <Route path='/LeftLayout' element={<MainLayout />} /> 
      </Routes>
    </> 
  )
}

export default App