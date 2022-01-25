import logo from './logo.svg';
import './App.css';
import React, {useRef, useEffect, useState} from "react";
import Home from './Home'
import {BrowserRouter as Router, Switch, Routes, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

function WebcamFace() {

  const videoRef = useRef(null);
  const photoRef = useRef(null);
 
  const [hasPhoto, setHasPhoto ] = useState(false);

  const getVideo = () => {
    navigator.mediaDevices
        .getUserMedia({
            audio:false,
            video: true
        })
        .then(stream => {
            let video = videoRef.current;
            video.srcObject = stream;
            video.play();
        })
        .catch(err=>{
            console.log(err);
        })    
  }

  useEffect(()=>{
      getVideo();
  }, [videoRef])

  return (
    <div className="App">
        <div className="camera">
            <video className ="video-circle" ref={videoRef} playsInline autoPlay width="300" height="300" ></video>
            <div className="text-notification-camera">Mira a la cámara y sonrie para veritificar tu identidad</div>
            <Link to="/WebcamDNI">
                <button type="button" className="button-camera-first">Siguiente</button>
            </Link>
        </div>
    </div>
  );
}

export default WebcamFace;
