import React from 'react'
import './chat.css'
import MainLayout from '../../components/left_layout/layout'
import Chat_group from '../../components/Group_chat/Chat_group'
import InfoSection from '../../components/InfoSection/InfoSection'
const Chat = () => {
    return (
     
    <div class="main-layout">
        <div class="left">
         <MainLayout />
        </div>
        
        <div class="mid">
          <Chat_group />
        </div>
        
        <div class="right">
          <InfoSection />
        </div>
    </div>
    )
}

export default Chat