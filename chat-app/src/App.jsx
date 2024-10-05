import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Chat from './pages/Chat/Chat'
import ProfileUpdate from './pages/ProfileUpdate/ProfileUpdate'
import InfoSection from './components/InfoSection/InfoSection';

const App = () => {
  return (
    <div className="messenger-container">
      <InfoSection />  {/* Hiển thị InfoSection */}
    </div>
  );
};


export default App