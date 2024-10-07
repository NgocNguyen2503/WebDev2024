import React from 'react'
import './Privacy.css'
import using_app from '../../assets/person-using-laptop.jpg'

const Privacy = () => {
    return (
        <div className='privacy'>
            <div className="privacy-slogan">
                <p className="slogan-content">Connect with confidence</p>
                <img src={using_app} alt="" className="slogan-img" />
            </div>
            <div className="privacy-connect">
                <p className="privacy-connect-title">
                    Protecting your privacy
                </p>
                <p className="privacy-connect-content">
                    Who you talk to and what you share should be up to you. We’re dedicated to making sure ChatApp is a safe, private, and secure place for you to connect with the people who matter. To do this, we’ve built tools that allow you to stay in control, secure your account, and stay safe on the platform.
                </p>
            </div>
            <div className="privacy-personal">
                <img src={using_app} alt="" className="slogan-img" />
                <div className="privacy-personal-content">
                    <p className="personal-title">Your personal messages are private.</p>
                    <p className="personal-content">We want you to know how we use your information. We collect information from Messenger so that we can improve the product experience and keep people safe and secure. We don’t use the content of your personal messages for ads personalization.  Some types of messages that aren’t personal include messages to and from business accounts messages in features designed to be more public, like channels. Meta is also adding an additional layer of privacy by securing personal messages. We is also adding an additional layer of privacy by securing personal messages and calls  with end-to-end encryption, which means nobody, including us, can see or listen to what’s sent or said in your calls or messages.</p>
                </div>
            </div>
        </div>
    )
}

export default Privacy