import React from 'react';
import { Link } from "react-router-dom";

import InfoOnHover from './../components/InfoOnHover';
import { data } from './../data/Contact';

import titleImage from './../assets/static/contact.png';

const Contact = () => {
    return(
        <main className="lander page">
            
            <div className="titleImage">
                <img className="w-1/2" src={titleImage}/>
            </div>
            <div className="contactInfoContainer relative">
                {/* <img id="email" className="w-1/4" src={emailImage}/> */}

                {data.map((item) => (

                    <InfoOnHover data={item}/>

                ))}


               {/*  <img id="number" className="w-1/4" src={numberImage}/>
                <img id="cv" className="w-1/6" src={cvImage}/>
                <img id="github" className="w-1/4" src={githubImage}/> */}

                <div className="contactInfoStage absolute">
                    <p id="info" className="invisible">TEST</p>
                </div>
            </div>

        </main>
    );
    
}
export default Contact;