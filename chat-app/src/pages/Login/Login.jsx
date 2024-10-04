import React from 'react'
import './login.css'
import large_logo from '../../assets/logo_icon.png'
import appstore from '../../assets/app_store.png'
import microsoft from '../../assets/microsoft.png'
import Login_Navbar from '../../components/loginNavBar/Login_Navbar'

const Login = () => {
    return (
        <div>
            <Login_Navbar />
            <div className="login">
                <div className="left-login">
                    <div className="login-slogan">
                        <p>Connect</p>
                        <p>everytime,</p>
                        <p>everywhere</p>
                    </div>
                    <div className="login-description">
                        <p>Stay in Touch with your Special People and</p>
                        <p>Make New Friends!</p>
                    </div>
                    <div className="login-container">
                        <input type="email" placeholder='Email address' />
                        <input type="password" placeholder='Password' />
                        <div className="button-signup">
                            <button>Log in</button>
                            <p>New to ChatApp? <span className='sign-up'>Sign up</span> now</p>
                        </div>

                    </div>
                    <div className="login-platform">
                        <img className="microsoft" src={microsoft} alt="Microsoft" />
                        <img className="appstore" src={appstore} alt="app store" />

                    </div>
                </div>
                <div className="right-login">
                    <img src={large_logo} alt='large logo' />
                </div>
            </div>
        </div>
    )
}

export default Login
