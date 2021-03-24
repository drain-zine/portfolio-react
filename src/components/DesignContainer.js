import { useEffect, useState } from 'react';
import $ from 'jquery'; 

import DesignCard from '../components/DesignCard';
import Menu from '../components/Menu.js';

const DesignContainer = (props) => {  
    const {data,title,color, fontColor} = props;
    const [docHeight, setDocHeight] = useState([]);
    const [lineRandYOffset, setLineRandYOffset] = useState([]);
    

     // animate lines
     useEffect(() => {
         /* INIT */
        // reset page to top
        window.scrollTo(0, 0);

        // set doc height state to scale line container
        var cardContainerParent = document.getElementsByClassName("cardContainer")[0].parentElement;
        var cardContainerParentHeight = cardContainerParent.offsetHeight;
       
        var startingLength = 3;

        /* cardContainerParentHeight += sbHeight; */
      
        
        var cards = document.getElementsByClassName("cardContainer");
    
        // vars for scroll anim
        const paths = document.getElementsByClassName('line-path');
        var pathLengths = [];
        var drawLength = 0;

        // vars for upward scrolling behaviour
        var lastScrollTop = 0;
        var scrollUp = false;

        // pre specify this -> allows us to address values
        var lastDrawLengths = new Array(cards.length);

        /* setTimeout(function(){console.log("wawgwan: " + $("main").outerHeight(true));},200); */

        // wait until next tick -> if we do this immediately, dom renderer will have yet to scale path to doc height state and thus our line will have path length 0
        /* process.nextTick(() => { */
        setTimeout(function(){
            cardContainerParentHeight=$("main").outerHeight(true);
            console.log("test timeout :): " + cardContainerParentHeight);
           
            for(let i = 0; i < paths.length; i++){
                let rand_offset = 3+Math.floor(Math.random() * 4);
                let card_y = cards[i].getBoundingClientRect().top;
                setLineRandYOffset(lineRandYOffset => [...lineRandYOffset, rand_offset]);
                
                setDocHeight(docHeight => [...docHeight, (cardContainerParentHeight - card_y)*(1+(rand_offset/100))]);

                let pathLength = (cardContainerParentHeight - card_y)*(1+(rand_offset/100));
                
                
                // adjuts dash and offset such that we hide the line
                paths[i].style.strokeDasharray = pathLength + ' ' + pathLength;
                paths[i].style.strokeDashoffset = pathLength - startingLength; 
                paths[i].style.stroke = fontColor;
                pathLengths[i] = pathLength;
            }
        }, 300);



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
        <main className={"bg-"+color + " text-"+ fontColor +" lander page flex pt-24"}>
            <div className="flex-initial inline-block ml-24 z-20 mr-0">
                <h1>{title}</h1>
            </div>

            <div className="flex-initial relative test">
                {data.map((design,index) => (
                    <DesignCard design={design} docHeight={docHeight[index]} lineRandYOffset={lineRandYOffset[index]}/>
                    
                ))}
            </div>       
        </main>
    );
}

export default DesignContainer;