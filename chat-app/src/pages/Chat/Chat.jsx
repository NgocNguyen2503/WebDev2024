import React from 'react'
import './chat.css'

import Chat_group from '../../components/Group_chat/Chat_group'
import InfoSection from '../../components/InfoSection/InfoSection'
import LeftLayout from '../../components/left_layout/Layout'

const Chat = () => {
  return (

    <div class="main-layout-chat">
      <div class="left-section">
        <LeftLayout />
      </div>
      <div className="chat-section">
        <div class="mid">
          <Chat_group />
        </div>

        <div class="right">
          <InfoSection />
        </div>
      </div>

    </div>
  )
}

export default Chat