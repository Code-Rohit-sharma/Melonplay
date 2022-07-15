import React from 'react';
import '../sass/signup.css'
import { FaHeart, FaMicrophone, FaVideo, FaComment, FaMicrophoneSlash, FaVideoSlash, FaShareSquare, FaAngleUp, FaVolumeMute, FaVolumeUp, FaUserAlt, FaLock, FaUserLock } from 'react-icons/fa';

export default function Signup() {
  return (
    <div className="signup-container">
      <h2></h2>
      <div className="signup-box">
        <div className="signup-image"></div>
        <div className="signup-details">
          <h3>Signup</h3>
          <div className="input-box">
            <div className="user-name inp">
              <FaUserAlt />
              <input type="text" placeholder='Enter Your Name' />
            </div>
            <div className="user-password inp">
              <FaLock />
              <input type="password" placeholder='Enter Your Password' />
            </div>
            <div className="confirm-password inp">
              <FaUserLock/>
              <input type="password" placeholder='Confirm Password'/>
            </div>
            <button className="signup-btn">Signup</button>
          </div>
        </div>
      </div>
    </div>
  )
}
