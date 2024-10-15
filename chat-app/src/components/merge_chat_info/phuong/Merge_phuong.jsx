import React from 'react'
import './Merge_phuong.css'


import InfoPhuong from '../../InfoPhuong/InfoPhuong'
import Chat_phuong from '../../Chat_phuong/Chat_phuong'


const Merge_phuong = () => {
  return (

    <div class="chatbox-section">
      <Chat_phuong />
      <InfoPhuong />
    </div>

  )
}

export default Merge_phuong