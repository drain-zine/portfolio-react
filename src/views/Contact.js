import React from 'react';
import { Link } from "react-router-dom";
import video from './../assets/video/red.mov';
import titleImage from './../assets/static/contact.png';

const Contact = () => {
    return(
        <main className="lander page">
            
            <div className="titleImage">
                <img className="w-1/2" src={titleImage}/>
            </div>
            <div className="infoContainer">
            </div>

        </main>
    );
}
export default Contact;