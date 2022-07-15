// import React, { useState } from 'react'
import '../sass/navbar.css';
import { useState } from 'react';

export default function Navbar() {

    // const [mystyle, setmystyle] = useState({
    //     top: "-100%",
    // });

    // const togglestyle = () => {
    //     if (mystyle.top == "-100%") {
    //         setmystyle({
    //             top: "20%"
    //         })
    //     }
    //     else{
    //         setmystyle({
    //             top:"-100%"
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
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="/Videocall">
                            VideoCall
                        </a>
                    </li>
                </ul>
                <div className="buttons">
                    <button className="btn btn-login">
                        <a href="/Login">
                            Login
                        </a>
                    </button>
                    <button className="btn btn-signup">
                        <a href="/Signup">
                            Signup
                        </a>
                    </button>
                </div>
            </div>
        </>
    )
}
