import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Chat from './pages/Chat/Chat'
import ProfileUpdate from './pages/ProfileUpdate/ProfileUpdate'
import Chat_group from './components/Group_chat/Chat_group'
import Chat_nghia from './components/Chat_nghia/Chat_nghia'
import Chat_duy from './components/Chat_duy/Chat_duy'
import Chat_duc from './components/Chat_duc/Chat_duc'
import Chat_phuong from './components/Chat_phuong/Chat_phuong'
import Chat_ngoc from './components/Chat_ngoc/Chat_ngoc'



const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/profile' element={<ProfileUpdate />} />
        <Route path='/chat_group' element={< Chat_group/>} />
        <Route path='/chat_nghia' element={< Chat_nghia/>} />
        <Route path='/chat_ngoc' element={< Chat_ngoc/>} />
        <Route path='/chat_duy' element={< Chat_duy/>} />
        <Route path='/chat_duc' element={< Chat_duc/>} />
        <Route path='/chat_phuong' element={< Chat_phuong/>} />
      </Routes>
    </>
  )
}

export default App