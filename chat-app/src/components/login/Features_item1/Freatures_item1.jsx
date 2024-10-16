import React from 'react'
import logo from '../../../assets/logo_big.png'
import './features_item1.css'
const Freatures_item1 = (props) => {
  return (
    <div className='feature_item1'>
      <div className="feature-desc">
        <div className="feature-title">
          <p>{props.title}</p>
        </div>
        <div className="feature-content">
          <p>{props.content}</p>
        </div>
      </div>
      <div className="feature-img">
        <img src={logo} alt="features image" />
      </div>
    </div>
  )
}

export default Freatures_item1