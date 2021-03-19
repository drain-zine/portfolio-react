import { useEffect, useState } from 'react';
import DesignCard from './DesignCard';

import $ from 'jquery'; 
import {designs_raw} from './../data/Designs.js';

const Design = () => {
    // state decs
    const [designs] = useState(designs_raw);
    const [docHeight, setDocHeight] = useState([]);
    const [lineRandYOffset, setLineRandYOffset] = useState([]);
    

     // animate lines
     useEffect(() => {
        // reset page to top
        window.scrollTo(0, 0);

        // vars for menu fades
        const delayTime = 200;
        const fadeTime = 300;

        // set doc height state to scale line container
        var cardContainerParent = document.getElementsByClassName("cardContainer")[0].parentElement;
        var cardContainerParentHeight = cardContainerParent.offsetHeight;
        var sbHeight = window.innerHeight * (window.innerHeight / document.body.offsetHeight);
        var startingLength = 3;

        cardContainerParentHeight += sbHeight;

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

        $.fn.reverse = [].reverse;
        $(".menuBtn").mouseenter(function(){
            $(".menu div").reverse().each(function(i) {   
                $(this).delay(delayTime * i).fadeTo(fadeTime,1);
            });
        });

        $(".dropdown").mouseleave(function(){
            console.log("Hello");
            $(".menu div").each(function(i) {   
                $(this).delay(delayTime * i).fadeTo(fadeTime,0);
            });
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
        <main className="lander flex mt-24">
            <div className="flex-initial inline-block ml-24 z-20 mr-0">
                <h1>Design</h1>
            </div>

            <div className="flex-initial relative">
                    {designs.map((design,index) => (
                        <DesignCard design={design} docHeight={docHeight[index]} lineRandYOffset={lineRandYOffset[index]}/>
                        
                    ))}
                
            </div>

            <div className="dropdown fixed flex flex-col m-8 p-3 ">
                <div className="menu">
                    <div><a href="/index.html">Home</a></div>
                    <div><a href="/portfolio.html">Portfolio</a></div>	
                    <div><a href="/contact.html">Contact</a></div>	
                </div>

                <div className="menuBtn cursor-pointer">
                    <h3>Menu</h3>
                </div>
            </div>
        </main>
    );
}
export default Design;