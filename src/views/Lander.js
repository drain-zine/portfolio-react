import React from 'react';
import { Link } from "react-router-dom";
import video from './../assets/video/red.mov';

const Lander = () => {
    return(
        <main className="lander page">
            <div className="ml-24 mt-24 relative z-20">
                <h1>Tom Stannett</h1>
                <Link to="/design">
                    <h1 className="link ml-24">Design</h1>
                </Link>
                <h1 className="link ml-16">Art</h1>
                <h1 className="link ml-8">Contact</h1>
            </div>

            <div className="videoContainer absolute z-0">
                <video autoPlay loop muted>
                    <source src={video} type="video/mp4"></source>
                </video>
            </div>
        </main>
    );
}
export default Lander;