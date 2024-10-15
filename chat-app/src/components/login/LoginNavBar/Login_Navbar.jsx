import React, { useState } from 'react'
import logo from '../../../assets/logo.png'
import './Login_Navbar.css'
import { Link } from 'react-router-dom'

const Login_Navbar = () => {

    const [menu, setMenu] = useState('')

    return (
        <div className='Login-navbar'>
            <div className="login-nav-logo">
                <Link to='/' style={{ textDecoration: "none" }}>
                    <img src={logo} alt="logo" onClick={() => { setMenu('home') }} /></Link>
            </div>
            <div className="nav-intro">
                <ul className="login-nav-menu">

                    <li className='login-nav-li' onClick={() => { setMenu('features') }}>
                        <Link to='/features' style={{ textDecoration: "none" }}>Features</Link>{menu === 'features' ? <hr /> : <></>}
                    </li>

                    <li className='login-nav-li' onClick={() => { setMenu('desk-app') }}>
                        <Link to='/desktop-app' style={{ textDecoration: "none" }}>Desktop App</Link>{menu === 'desk-app' ? <hr /> : <></>}
                    </li>
                    <li className='login-nav-li' onClick={() => { setMenu('privacy') }}>
                        <Link to='/privacy' style={{ textDecoration: "none" }}>Privacy & Safety</Link>{menu === 'privacy' ? <hr /> : <></>}
                    </li>
                    <li className='login-nav-li' onClick={() => { setMenu('sign-up') }}>
                        <Link to='/signup' style={{ textDecoration: "none", color: "#007BFF" }}>Sign up</Link>{menu === 'sign-up' ? <hr /> : <></>}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Login_Navbar