import React from 'react'
import './login.css'
import large_logo from '../../assets/logo_icon.png'
import Login_Navbar from '../../components/loginNavBar/Login_Navbar'

const Login = () => {
    return (
        <div>
            <Login_Navbar />
            <div className="login">
                <div className="left-login">
                    <div className="login-slogan">
                        <p>Connect</p>
                        <p>anytime,</p>
                        <p>anywhere</p>
                    </div>
                    <div className="login-description"></div>
                    <div className="login-form"></div>
                    <div className="login-platform"></div>
                </div>
                <div className="right-login">
                    <img src={large_logo} alt='large logo' />
                </div>
            </div>
        </div>
    )
}

export default Login