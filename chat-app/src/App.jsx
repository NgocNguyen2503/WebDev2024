import React from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Chat from './pages/Chat/Chat'


import Login from './pages/Login/Login'
import Sign_up from './pages/Sign_up/Sign_up'

import Features from './pages/Features/Features'
import DesktopApp from './pages/DesktopApp/DesktopApp'
import Privacy from './pages/Privacy/Privacy'
import Login_Navbar from './components/login/LoginNavBar/Login_Navbar'
import Chat_box from './components/Chat_box/Chat_box'
import Merge_duc from './components/merge_chat_info/duc/Merge_duc'
import Chat1 from './components/merge_chat_info/Chat1/Chat1'
import Merge_phuong from './components/merge_chat_info/phuong/Merge_phuong'
import Merge_ngoc from './components/merge_chat_info/ngoc/Merge_ngoc'
import Merge_nghia from './components/merge_chat_info/nghia/Merge_nghia'
import Merge_duy from './components/merge_chat_info/duy/Merge_duy'


const App = () => {
  const location = useLocation()
  const showNavbar = location.pathname == '/' || location.pathname == '/signup ' || location.pathname == '/features';
  return (

    <>
      {showNavbar ? <Login_Navbar /> : <></>}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Sign_up />} />
        <Route path='/features' element={<Features />} />
        <Route path='/desktop-app' element={<DesktopApp />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/chat' element={<Chat />} >
          <Route path='1' element={<Chat1 />} />
          <Route path='2' element={<Merge_phuong />} />
          <Route path='3' element={<Merge_ngoc />} />
          <Route path='4' element={<Merge_nghia />} />
          <Route path='5' element={<Merge_duc />} />
          <Route path='6' element={<Merge_duy />} />
        </Route>
        <Route path='/mergeduc' element={<Merge_duc />} />
        <Route path='/chatbox' element={<Chat_box />} ></Route>


        {/* <Route path='/chat_group' element={< Chat_group />} />
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
        <Route path='/infosection' element={< InfoSection />} /> */}

        {/* <Route path='/LeftLayout' element={<LeftLayout />} />
        <Route path='/merge_duc' element={<Merge_duc />} /> */}

      </Routes>
    </>
  )
}



export default App;
