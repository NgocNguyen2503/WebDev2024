import React from 'react'
import './chat.css'
import MainLayout from '../../components/left_layout/layout'
import Chat_group from '../../components/Group_chat/Chat_group'
import InfoSection from '../../components/InfoSection/InfoSection'
const Chat = () => {
    return (
        <div className='chat'>
            <MainLayout />
            <Chat_group />
            <InfoSection />
        </div>
    )
}

export default Chat