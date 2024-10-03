import React from 'react'
import logo from '../../assets/logo.png'
import './Login_Navbar.css'

const Login_Navbar = () => {
    return (
        <div className='Login-navbar'>
            <div className="login-nav-logo">
                <img src={logo} alt="logo"></img>
            </div>
            <div className="nav-intro">
                <ul className="login-nav-menu">
                    <li className='login-nav-li'>Features</li>
                    <li className='login-nav-li'>Desktop App</li>
                    <li className='login-nav-li'>Privacy & Safety</li>
                </ul>
            </div>
        </div>
    )
}

export default Login_Navbar