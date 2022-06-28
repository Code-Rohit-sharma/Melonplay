import React, { useState } from 'react'
import '../sass/navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {

    // const [mystyle, setmystyle] = useState({
    //     color: 'white',
    //     backgroundColor: 'black'
    // });

    // const togglestyle = () => {
    //     if (mystyle.color == 'white') {
    //         setmystyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //     }
    //     else {
    //         setmystyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //     }
    // }

    return (
        <>
            <div className="navbar">
                <h1></h1>
                <ul>
                    <li>
                        <a href="/">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/about">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="/Videocall">
                            VideoCall
                        </a>
                    </li>
                    <li>
                        <a href="/chatting">
                            Chatting
                        </a>
                    </li>
                    <li>Contact Us</li>
                </ul>
                <div className="buttons">
                    <button className="btn btn-login">
                        Login
                    </button>
                    <button className="btn btn-signup">Signup</button>
                    {/* <button className="btn btn-darkmode">Enable Dark Mode</button> */}
                </div>
            </div>
        </>
    )
}