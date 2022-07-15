import React from 'react';
import '../sass/login.css';
import { FaHeart, FaMicrophone, FaVideo, FaComment, FaMicrophoneSlash, FaVideoSlash, FaShareSquare, FaAngleUp, FaVolumeMute, FaVolumeUp, FaUserAlt, FaLock } from 'react-icons/fa';

export default function Login() {
    return (
        <>
            <div className="login-container">
                <h2></h2>
                <div className="login-box">
                    <div className="login-image">

                    </div>
                    <div className="login-input">
                        <h3>Login</h3>
                        <div className="input-user inputs">
                        <FaUserAlt/>
                            <input type="text" placeholder='Enter Username Or E-mail'/>
                        </div>
                        <div className="input-user-password inputs">
                            <FaLock/>
                            <input type="password" placeholder='Enter Password' />
                        </div>
                        <button className="btn btn-login">
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
