import React from 'react'
import './Merge_ngoc.css'

import Chat_ngoc from '../../../Chat_ngoc/Chat_ngoc'
import InfoNgoc from '../../../Infongoc/infongoc'


const Merge_ngoc = () => {
  return (

    <div class="main_merge_ngoc">
      <div className="merge_ngoc">
        <Chat_ngoc />
        <InfoNgoc />
      </div>

    </div>
  )
}

export default Merge_ngoc