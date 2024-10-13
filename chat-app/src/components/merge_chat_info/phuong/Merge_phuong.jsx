import React from 'react'
import './Merge_phuong.css'

import Chat_phuong from '../../../Chat_phuong/Chat_phuong'
import InfoPhuong from '../../../Infophuong/infophuong'


const Merge_phuong = () => {
  return (

    <div class="main_merge_phuong">
      <div className="merge_phuong">
        <Chat_phuong />
        <InfoPhuong />
      </div>

    </div>
  )
}

export default Merge_phuong