import { useEffect, useState } from 'react';
import $ from 'jquery'; 

import DesignCard from './DesignCard';
import Menu from './Menu.js';

import {designs_raw} from './../data/Designs.js';

const Design = () => {
    // state decs
    const [designs] = useState(designs_raw);
    const [docHeight, setDocHeight] = useState([]);
    const [lineRandYOffset, setLineRandYOffset] = useState([]);
    

     // animate lines
     useEffect(() => {
         /* INIT */
        // reset page to top
        window.scrollTo(0, 0);

        /* Fade in Elements */
        $(".cardContainer").each(function(i) {   
            $(this).delay(400 * i).fadeTo(500,1);
        });

        // set doc height state to scale line container
        var cardContainerParent = document.getElementsByClassName("cardContainer")[0].parentElement;
        var cardContainerParentHeight = cardContainerParent.offsetHeight;
        var sbHeight = window.innerHeight * (window.innerHeight / document.body.offsetHeight);
        var startingLength = 3;

        cardContainerParentHeight += 400;

        var cards = document.getElementsByClassName("cardContainer");

        // adjust heights of lines
        for(let i = 0; i < cards.length; i++){
            let rand_offset = 3+Math.floor(Math.random() * 4);
            let card_y = cards[i].getBoundingClientRect().top;
            setLineRandYOffset(lineRandYOffset => [...lineRandYOffset, rand_offset]);
            setDocHeight(docHeight => [...docHeight, (cardContainerParentHeight - card_y)*(1+(rand_offset/100))]);
        }
    
        // vars for scroll anim
        const paths = document.getElementsByClassName('line-path');
        var pathLengths = [];
        var drawLength = 0;

        // vars for upward scrolling behaviour
        var lastScrollTop = 0;
        var scrollUp = false;

        // pre specify this -> allows us to address values
        var lastDrawLengths = new Array(cards.length);

        // wait until next tick -> if we do this immediately, dom renderer will have yet to scale path to doc height state and thus our line will have path length 0
        process.nextTick(() => {
            for(let i = 0; i < paths.length; i++){
                let pathLength = paths[i].getTotalLength();
               
                // adjuts dash and offset such that we hide the line
                paths[i].style.strokeDasharray = pathLength + ' ' + pathLength;
                paths[i].style.strokeDashoffset = pathLength - startingLength; 
                
                pathLengths[i] = pathLength;
            }
        });



        // scroll event handler
        window.onscroll = () => {
            var st = window.pageYOffset || document.documentElement.scrollTop;
            // check if scrolling down
            if(st > lastScrollTop){
                // handle drawing of each path
                for(let i = 0; i < paths.length; i++){
                    // only apply if scrolling down, and if beyond current line
                    if(!scrollUp || drawLength >= lastDrawLengths[i]){
                        drawLength = pathLengths[i] * ((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight));
                        console.log("p: " + pathLengths[i] + " d: " + drawLength);
                        paths[i].style.strokeDashoffset = pathLengths[i] - drawLength;
                    
                        // update last draw lengths
                        lastDrawLengths.push(drawLength);
                    }
                }
            }else{
                scrollUp = true;
            }
            
            // for mobile devices
            lastScrollTop = st <= 0 ? 0 : st;
        }     
      }, []);


    return(
        <main className="lander page flex mt-24">
            <div className="flex-initial inline-block ml-24 z-20 mr-0">
                <h1>Design</h1>
            </div>

            <div className="flex-initial relative">
                    {designs.map((design,index) => (
                        <DesignCard design={design} docHeight={docHeight[index]} lineRandYOffset={lineRandYOffset[index]}/>
                        
                    ))}
                
            </div>

            <Menu />
        </main>
    );
}
export default Design;