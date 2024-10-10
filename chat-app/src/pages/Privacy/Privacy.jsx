import React from 'react'
import './Privacy.css'
import using_app from '../../assets/person-using-laptop.jpg'
import data_protection from '../../assets/data_protection.avif'

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

                <img className="privacy-connect-img" src={data_protection} alt="" />
            </div>
            <hr />
            <div className="privacy-personal">
                <img src={using_app} alt="" className="slogan-img" />
                <div className="privacy-personal-content">
                    <p className="personal-title">Your personal messages are private.</p>
                    <p className="personal-content">We want you to know how we use your information. We collect information from ChatApp so that we can improve the product experience and keep people safe and secure. We don’t use the content of your personal messages for ads personalization.  Some types of messages that aren’t personal include messages to and from business accounts messages in features designed to be more public, like channels. Meta is also adding an additional layer of privacy by securing personal messages. We is also adding an additional layer of privacy by securing personal messages and calls  with end-to-end encryption, which means nobody, including us, can see or listen to what’s sent or said in your calls or messages.</p>
                    <button className="personal-more">Learn more</button>
                </div>

            </div>
            <hr />
            <div className="design-safety">

                <p className="design-safety-title">BUILD WITH SAFETY BY DESIGN</p>
                <p className="design-safety-desc">ChatApp has tools to help keep you safe and in control of your own experience.</p>

                <div className="design-safety-content">
                    <p className="content-title">ChatApp’s approach to safer private messaging:</p>

                    <div className="content-cards">
                        <div className="card1">
                            <p className="card-title">Preventing harm
                                at the source</p>
                            <p className="card-content">Preventing harm from happening in the first place is the best way to keep people safe.</p>
                        </div>

                        <div className="card2">
                            <p className="card-title">Giving you more choice and control</p>
                            <p className="card-content">In addition to our efforts to prevent harm, we are giving you more control of your messaging inbox to account for the variety of experiences you want.</p>
                        </div>

                        <div className="card3">
                            <p className="card-title">Responding
                                with care</p>
                            <p className="card-content">When we become aware of potential abuse on our services, we respond. We do this by enforcing our Community Standards, sharing data with NCMEC and our law enforcement agencies.</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Privacy