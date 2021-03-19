import { useEffect, useState } from 'react';
import DesignCard from './DesignCard';

import {designs_raw} from './../data/Designs.js';

const Design = () => {
    const [designs] = useState(designs_raw);

    const [docHeight, setDocHeight] = useState([]);

     // animate lines
     useEffect(() => {
        // set doc height state to scale line container
        var cardContainerParent = document.getElementsByClassName("cardContainer")[0].parentElement;
        var cardContainerParentHeight = cardContainerParent.offsetHeight;

        var cards = document.getElementsByClassName("cardContainer");

        // adjust heights of lines
        for(let i = 0; i < cards.length; i++){
            let card_y = cards[i].getBoundingClientRect().top;
            setDocHeight(docHeight => [...docHeight, (cardContainerParentHeight - card_y)]);
        }
    
       /*  console.log(docHeight); */
        // vars for scroll anim
        const path = document.getElementById('line-path');
        var pathLength = 0
        var drawLength = 0;

        // vars for upward scrolling behaviour
        var lastScrollTop = 0;
        var scrollUp = false;
        var lastDrawLength = 0;

        // wait until next tick -> if we do this immediately, dom renderer will have yet to scale path to doc height state and thus our line will have path length 0
        process.nextTick(() => {
            pathLength = path.getTotalLength()
            path.style.strokeDasharray = pathLength + ' ' + pathLength;
            path.style.strokeDashoffset = pathLength; 
        });
    
        window.onscroll = () => {
            var st = window.pageYOffset || document.documentElement.scrollTop;

            // only apply if scrolling down
            if(st > lastScrollTop){
                // DO NOT RESET
                drawLength = pathLength * ((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight));
                if(!scrollUp || drawLength >= lastDrawLength){
                    console.log("p: " + pathLength.toString() + "d: " + drawLength.toString());
                    path.style.strokeDashoffset = pathLength - drawLength;
                }
            }else{
                scrollUp = true;
                lastDrawLength = drawLength;
            }
            
            // for mobile devices
            lastScrollTop = st <= 0 ? 0 : st;
        }     
      }, []);


    return(
        <main className="lander flex mt-24">
            <div className="flex-initial inline-block ml-24 z-20 mr-0">
                <h1>Design</h1>

                <div className="dropDownContainer fixed"></div>
            </div>

            <div className="flex-initial relative">
                
                    {designs.map((design,index) => (
                        <DesignCard design={design} docHeight={docHeight[index]}/>
                        
                    ))}
                
            </div>
        </main>
    );
}
export default Design;