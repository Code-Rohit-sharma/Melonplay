import React, { useContext, useEffect } from 'react';
import '../sass/video_call.css';
import { FaHeart, FaMicrophone, FaVideo, FaComment, FaMicrophoneSlash, FaVideoSlash, FaShareSquare, FaReply, FaVolumeMute, FaAngleUp } from 'react-icons/fa';
import userContext from './UserContext';
import Video1 from "../video/sample.mp4";
import { useState } from 'react';

export default function Video_call() {
    const { setNavVisible } = useContext(userContext);

    useEffect(() => {
        setNavVisible(false);
        return () => {
            setNavVisible(true);
        }
    }, [])

    const [Style, setMyStyle] = useState({
        bottom: '-20px'
    })

    const toggle = () => {
        if (Style.bottom == '-20px') {
            setMyStyle({
                bottom: '-500px',
            })
        }
        else {
            setMyStyle({
                bottom: '-20px'
            })
        }
    }

    return (
        <>
            <div className="video-container">
                <div className="media-stream">
                    <video src={Video1} controls="True" />
                    <div className="back-button">
                        <a href="/">
                            <FaReply />
                        </a>
                    </div>
                    <div className="self-camera">
                        <div className="camera" onClick={toggle}>
                        </div>
                        <div className="buttons-toggle">
                            <div className="self-microphone">
                                <FaMicrophone size={18} />
                            </div>
                            <div className="self-video">
                                <FaVideo size={18} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="participants" style={Style} >
                    <div className="participant participant-1">
                        <div className="participants-icons">
                            <div className="mic-icon">
                                <FaVolumeMute />
                            </div>
                            <div className="video-icon">
                                <FaVideo />
                            </div>
                        </div>
                    </div>
                    <div className="participant participant-2">
                        <div className="participants-icons">
                            <div className="mic-icon">
                                <FaVolumeMute />
                            </div>
                            <div className="video-icon">
                                <FaVideo />
                            </div>
                        </div>
                    </div>
                    <div className="participant participant-3">
                        <div className="participants-icons">
                            <div className="mic-icon">
                                <FaVolumeMute />
                            </div>
                            <div className="video-icon">
                                <FaVideo />
                            </div>
                        </div>
                    </div>
                    <div className="participant participant-4">
                        <div className="participants-icons">
                            <div className="mic-icon">
                                <FaVolumeMute />
                            </div>
                            <div className="video-icon">
                                <FaVideo />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}