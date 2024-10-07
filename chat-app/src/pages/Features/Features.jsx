import React from 'react'
import './features.css'
import Freatures_item1 from '../../components/Features_item1/Freatures_item1'
import Freatures_item2 from '../../components/Features_item2/Features_item2'
const Features = () => {
    return (
        <div className='features'>
            <Freatures_item1 title='A place for meaningful conversations' content='
Connect with your friends and family, build your community, and deepen your interests.

' />
            <Freatures_item2 title='Set the mood for your chats' content='Customize your chats with an evolving selection of themes featuring popular artists, holidays, and more' />
            <Freatures_item1 title='A place for meaningful conversations' content='
Connect with your friends and family, build your community, and deepen your interests.

' />
            <Freatures_item1 title='A place for meaningful conversations' content='
Connect with your friends and family, build your community, and deepen your interests.

' />
        </div>

    )
}

export default Features