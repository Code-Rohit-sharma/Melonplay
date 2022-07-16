import React, { useState , useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { red, green } from '@material-ui/core/colors'
import { TextField, Button } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { signInUser } from '../utils/auth'
import userContext from './UserContext';
import '../sass/login.css';
import { FaHeart, FaMicrophone, FaVideo, FaComment, FaMicrophoneSlash, FaVideoSlash, FaShareSquare, FaAngleUp, FaVolumeMute, FaVolumeUp, FaUserAlt, FaLock } from 'react-icons/fa';


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

const Login = () => {
    const {setUser} = useContext(userContext);
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    

    const navigate = useNavigate();
    
    const login = () => {
        signInUser(email, password, (creds) => {
            setUser(creds.user)
            navigate("/");
        }, (err) => {
            alert(err.message)
            setUser(null)
        })
    }

    return (
        <ThemeProvider theme={theme}>
            {/* <div className="login-wrapper">
                <div className="login-container">
                    <div className="text-login">
                        <h2>Login or Join Now And enjoy! the experiance of a new way to digital media</h2>
                    </div>
                    <div className="login">
                        <TextField className='login-input' label="Email" type="email" variant="filled" onChange={e => setEmail(e.target.value)} />
                        <TextField className='login-input' label="Password" type="password" variant="filled" onChange={e => setPassword(e.target.value)} />
                        <Button color="primary" className='login-loginBtn' variant="contained" onClick={login}>Login</Button>
                        <Button href='/register' color="secondary" className='login-registerBtn' variant="outlined">Need and Account?</Button>
                    </div>
                </div>
            </div> */}
            <div className="login-container">
                <h2></h2>
                <div className="login-box">
                    <div className="login-image">
                    </div>
                    <div className="login-input">
                        <h3>Login</h3>
                        <div className="input-user inputs">
                        <FaUserAlt/>
                            <input type="text" placeholder='Enter Username Or E-mail'
                            onChange={e => setEmail(e.target.value)}/>
                        </div>
                        <div className="input-user-password inputs">
                            <FaLock/>
                            <input type="password" placeholder='Enter Password' onChange={e => setPassword(e.target.value)}/>
                        </div>
                        <button className="btn btn-login" onClick={login}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
}
export default Login;