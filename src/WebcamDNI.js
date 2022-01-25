import logo from './logo.svg';
import './App.css';
import ReactLogo from './DNI.svg';
import React, {useRef, useEffect, useState} from "react";

function WebcamDNI() {

  const videoRef = useRef(null);
  const photoRef = useRef(null);
 
  const [hasPhoto, setHasPhoto ] = useState(false);

  const getVideo = () => {
    navigator.mediaDevices
        .getUserMedia({
            audio:false,
            video: {
                facingMode: {
                    exact: 'environment'
                }
            }
    
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
        <div className="cameraDNI">
            <video className = "videoCSS"  ref={videoRef} playsInline autoPlay ></video>
            <img className="dnilogo" src={ReactLogo} alt="React Logo" />
        </div>
    </div>
  );
}

export default WebcamDNI;
