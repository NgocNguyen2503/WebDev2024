import React from 'react'
import logo from '../../assets/logo.png'
import './Login_Navbar.css'
import { Link } from 'react-router-dom'

const Login_Navbar = () => {
    return (
        <div className='Login-navbar'>
            <div className="login-nav-logo">
                <Link to='/' style={{ textDecoration: "none" }}>
                    <img src={logo} alt="logo"></img></Link>
            </div>
            <div className="nav-intro">
                <ul className="login-nav-menu">

                    <li className='login-nav-li'>
                        <Link to='/features' style={{ textDecoration: "none" }}>Features</Link>
                    </li>

                    <li className='login-nav-li'>
                        <Link to='/desktop-app' style={{ textDecoration: "none" }}>Desktop App</Link>
                    </li>
                    <li className='login-nav-li'>
                        <Link to='/privacy' style={{ textDecoration: "none" }}>Privacy & Safety</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Login_Navbar