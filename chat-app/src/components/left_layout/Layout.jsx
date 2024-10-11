import React from 'react';
import SideNav from '../left/SideNav';  
import ChatList from '../ChatList/ChatList';  
import './Layout.css';  

const MainLayout = () => {
  return (
    <div className="main-layout">

        <SideNav />
      
      <div className="chat-listt">
        <ChatList />
      </div>
    </div>
  );
};

export default MainLayout;
