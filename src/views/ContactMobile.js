import React from 'react';
import { Link } from "react-router-dom";

import Menu from './../components/Menu';
import { data } from './../data/Contact';

import InfoOverlay from './../components/InfoOverlay';

import titleImage from './../assets/static/contact.png';
import './../animations/fade.scss';

const Contact = ({data}) => {
    return(
        <main className="lander">
            
            <div className="titleImage w-full">
                <img src={titleImage}/>
            </div>
            <div className="flex flex-col">
                {/* <img id="email" className="w-1/4" src={emailImage}/> */}

                {data.map((item) => (

                    <InfoOverlay data={item} />
                ))}


               {/*  <img id="number" className="w-1/4" src={numberImage}/>
                <img id="cv" className="w-1/6" src={cvImage}/>
                <img id="github" className="w-1/4" src={githubImage}/> */}

                <div className="contactInfoStage absolute">
                    <p id="info" className="invisible">TEST</p>
                </div>
            </div>
            <Menu />

        </main>
    );
    
}
export default Contact;