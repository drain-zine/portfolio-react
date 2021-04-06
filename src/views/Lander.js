import React from 'react';
import { Link } from "react-router-dom";


const Lander = () => {
    return(
        <main className="lander page">
            <div className="ml-4 mt-4 relative z-20 home">
                <h1 className="mb-26">Tom Stannett</h1>
                
                    <h1 className="link ml-24 w-min"><Link to="/design">Design</Link></h1>
                
                <h1 className="link ml-16 w-min">Art</h1>
                <h1 className="link ml-8 w-min"><Link to="/contact">Contact</Link></h1>
            </div>

            {/* <div className="videoContainer absolute z-0">
                <video autoPlay loop muted>
                    <source src={video} type="video/mp4"></source>
                </video>
            </div> */}
        </main>
    );
}
export default Lander;