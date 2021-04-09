import React from 'react';
import { isMobile } from "react-device-detect";

import InfoOnHover from './../components/InfoOnHover';
import Menu from './../components/Menu';
import { data } from './../data/Contact';
import ContactMobile from './ContactMobile';

import titleImage from './../assets/static/contact.png';
import './../animations/fade.scss';

const Contact = () => {
    if(isMobile){
        return( <ContactMobile data={data} />);
    }else{
        return(
            <main className="lander absolute h-screen noisy mmd:w-screen">
                
                <div className="titleImage w-full">
                    <img src={titleImage}/>
                </div>
                <div className="contactInfoContainer lg:relative mmd:ml-4 mmd:flex mmd:flex-row mmd:flex-wrap mmd:justify-center mmd:items-center">
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
                <Menu />

            </main>
        );
    }
    
}
export default Contact;