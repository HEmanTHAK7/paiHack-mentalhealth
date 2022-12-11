import React, { useState } from 'react';
import Webcam from "react-webcam";
import { Link } from 'react-router-dom';
import "./face.css"

const WebcamComponent = () => <Webcam />;


const videoConstraints = {
    width: 220,
    height: 200,
    facingMode: "user"
};

const Face  = () => {

    const [image,setImage]=useState('');
    const webcamRef = React.useRef(null);

    
    const capture = React.useCallback(
        () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc)
        });
        let imgsrc = image;
        
  

    return (
        <div className="webcam-container">
            <div className="webcam-img">

                {image == '' ? <Webcam
                    audio={false}
                    height={300}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={440}
                    videoConstraints={videoConstraints}
                /> : <img src={image} />
                }
            </div>
            <div>
                {image != '' ?
                    
                    <Link to={"/"}><button className="webcam-btn" id='webbt'>
                    Analyse</button></Link>:
                    <button onClick={(e) => {
                        e.preventDefault();
                        capture();
                    }}
                        className="webcam-btn">Capture</button>
                }
            </div>
        </div>
    );


};



export default Face;