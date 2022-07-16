import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { red, green } from '@material-ui/core/colors'
import { TextField, Button } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { signUpUser, updateUserInfo } from '../utils/auth'
import userContext from './UserContext';
import '../sass/signup.css';
import { reload } from 'firebase/auth';
import { FaHeart, FaMicrophone, FaVideo, FaComment, FaMicrophoneSlash, FaVideoSlash, FaShareSquare, FaAngleUp, FaVolumeMute, FaVolumeUp, FaUserAlt, FaLock, FaUserLock, FaEnvelope } from 'react-icons/fa';

const theme = createTheme({
    palette: {
        primary: {
            main: green[800],
        },
        secondary: {
            main: red[300]
        },
    }
})

const Signup = () => {

    const { setUser } = useContext(userContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conPassword, setConfPassword] = useState('');
    const navigate = useNavigate();

    const register = () => {
        if (name && email && password && conPassword && email.includes('@') && password === conPassword) {
            signUpUser(email, password,
                (creds) => {
                    updateUserInfo({ displayName: name }, (userCreds) => {
                        setUser(userCreds)
                        navigate('/')
                    })
                },
                (err) => {
                    alert(err.message)
                    window.location.reload()
                })
        }
        else {
            alert("invalid creds")
            window.location.reload()
        }
    }


    return (
        <ThemeProvider theme={theme}>
            
            {/* <div className="signup-wrapper">
                <div className="signup-container">
                    <div className="text-signup">
                        <h2>Login or Join Now And enjoy! the experiance of a new way to digital media</h2>
                    </div>
                    <div className="signup">
                        <TextField className='signup-input' label="name" type="text" variant="filled" onChange={e => setName(e.target.value)} />
                        <TextField className='signup-input' label="email" type="email" variant="filled" onChange={e => setEmail(e.target.value)} />
                        <TextField className='signup-input' label="Password" type="password" variant="filled" onChange={e => setPassword(e.target.value)} />
                        <TextField className='signup-input' label="confirm password" type="password" variant="filled" onChange={e => setConfPassword(e.target.value)} />
                        <Button color="primary" className='signup-signupBtn' variant="contained" onClick={register}>register</Button>
                    </div>
                </div>
            </div> */}

            <div className="signup-container">
                <h2></h2>
                <div className="signup-box">
                    <div className="signup-image"></div>
                    <div className="signup-details">
                        <h3>Signup</h3>
                        <div className="input-box">
                            <div className="user-name inp">
                                <FaUserAlt />
                                <input type="text" placeholder='Enter Your Name' onChange={e => setName(e.target.value)}/>
                            </div>
                            <div className="user-email inp">
                                <FaEnvelope />
                                <input type="email" placeholder='Enter Your E-mail' onChange={e => setEmail(e.target.value)}/>
                            </div>
                            <div className="user-password inp">
                                <FaLock />
                                <input type="password" placeholder='Enter Your Password' onChange={e => setPassword(e.target.value)}/>
                            </div>
                            <div className="confirm-password inp">
                                <FaUserLock />
                                <input type="password" placeholder='Confirm Password' onChange={e => setConfPassword(e.target.value)}/>
                            </div>
                            <button className="signup-btn" onClick={register}>Signup</button>
                        </div>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default Signup;