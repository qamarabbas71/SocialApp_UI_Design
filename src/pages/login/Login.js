import React from 'react'
import "./login.css";

const Login = () => {
  return (
    <div className='login'>
        <div className="loginWraper">
            <div className="loginLeft">
                <h3 className='loginLogo'> SocialApp</h3>
                <span className="loginDesc">
                    Connect With Friends and the World Around You on SocialApp.
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">
                        Create a New Acount
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login