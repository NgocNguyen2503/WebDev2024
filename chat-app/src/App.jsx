import React from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Chat from './pages/Chat/Chat'
import ProfileUpdate from './pages/ProfileUpdate/ProfileUpdate'
import Chat_group from './components/Group_chat/Chat_group'
import Chat_nghia from './components/Chat_nghia/Chat_nghia'
import Chat_duy from './components/Chat_duy/Chat_duy'
import Chat_duc from './components/Chat_duc/Chat_duc'
import Chat_phuong from './components/Chat_phuong/Chat_phuong'
import Chat_ngoc from './components/Chat_ngoc/Chat_ngoc'


import Login from './pages/Login/Login'
import Sign_up from './pages/Sign_up/Sign_up'

import Features from './pages/Features/Features'
import DesktopApp from './pages/DesktopApp/DesktopApp'
import Privacy from './pages/Privacy/Privacy'
import Login_Navbar from './components/LoginNavBar/Login_Navbar'


import InfoSection from './components/InfoSection/InfoSection';
import InfoDuc from './components/InfoDuc/InfoDuc';
import InfoDuy from './components/InfoDuy/InfoDuy';
import InfoNghia from './components/InfoNghia/InfoNghia';
import InfoNgoc from './components/InfoNgoc/InfoNgoc';
import InfoPhuong from './components/InfoPhuong/InfoPhuong';

import MainLayout from './components/left_layout/layout'
import Chat_box from './components/Chat_box/Chat_box'
import Merge_duc from './components/merge_chat_info/duc/Merge_duc'

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
        <Route path='/chatbox' element={<Chat_box/>} ></Route>
        <Route path='/profile' element={<ProfileUpdate />} />

        <Route path='/chat_group' element={< Chat_group />} />
        <Route path='/chat_nghia' element={< Chat_nghia />} />
        <Route path='/chat_ngoc' element={< Chat_ngoc />} />
        <Route path='/chat_duy' element={< Chat_duy />} />
        <Route path='/chat_duc' element={< Chat_duc />} />
        <Route path='/chat_phuong' element={< Chat_phuong />} />
        <Route path='/infoDuc' element={< InfoDuc />} />
        <Route path='/infoDuy' element={< InfoDuy />} />
        <Route path='/infoNghia' element={< InfoNghia />} />
        <Route path='/infoNgoc' element={< InfoNgoc />} />
        <Route path='/infoPhuong' element={< InfoPhuong />} />
        <Route path='/infosection' element={< InfoSection />} />

        <Route path='/LeftLayout' element={<MainLayout />} />
        <Route path='/merge_duc' element={<Merge_duc />} />

      </Routes>
    </> 
  )
}



export default App;
