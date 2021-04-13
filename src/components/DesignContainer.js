import { useEffect } from 'react';
import { isMobile } from "react-device-detect"

import DesignCard from '../components/DesignCard';
import ScrollableLine from './ScrollableLine';
import FadeInWhenVisible from '../components/FadeInWhenVisible';

const DesignContainer = (props) => {  
    const {data,title,color, fontColor, noisy} = props;

        // animate lines
        useEffect(() => {
            const paths = document.getElementsByClassName("line-path-test");
    
            // vars for upward scrolling behaviour
            var lastScrollTop = 0;
    
            // pre specify this -> allows us to address values
            var lastDrawLengths = new Array(paths.length).fill(0);
            console.log(lastDrawLengths[0]);
    
            // scroll event handler
            const animatePaths = () => {
                var drawLength = 0;
                var st = window.pageYOffset || document.documentElement.scrollTop;
                // check if scrolling down
                if(st >= lastScrollTop){
                    // handle drawing of each path  
                    for(let i = 0; i < paths.length; i++){
                        let pathLength = paths[i].getTotalLength();
                        drawLength = pathLength * ((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight));
                        console.log("TEST: " + drawLength);
                        // only apply if scrolling down, and if beyond current line
                        /* console.log("draw: " + drawLength + " last: " + lastDrawLengths[i]); */
                        if(drawLength >= lastDrawLengths[i]){
                        /*  console.log("path: " + pathLength + " draw: " + drawLength); */
                            paths[i].style.strokeDashoffset = pathLength - drawLength;
                        
                            // update last draw lengths
                            lastDrawLengths[i] = drawLength;
                        }
                    }
                }
                // update lastScrollTop
                lastScrollTop = st;
            }  
    
            window.addEventListener('scroll', animatePaths, false);
            window.addEventListener('touchmove', animatePaths, false);
            
            return function cleanup() {
                window.removeEventListener('scroll', animatePaths, false);
                window.removeEventListener('touchmove', animatePaths, false);
            };
    
        }, []);


    return(
        <main className={"text-"+ fontColor +" lander flex lg:pt-24 " + (noisy ? "noisy " : "") + "mmd:flex mmd:justify-center mmd:flex-col mmd:pt-12 mmd:relative"}>
            <div className="flex-initial lg:inline-block lg:ml-24 z-20 lg:mr-0 relative mmd:text-center">
                <h1 id="title" style={{fontSize: "15rem"}}>{title}</h1>
                {!isMobile && <ScrollableLine fontColor={fontColor} /> }
            </div>

            <div className="flex-initial relative test mmd:text-center">
                {data.map((design,index) => (
                    <FadeInWhenVisible>
                        <DesignCard design={design} font_size={design.font_size}/>
                    </FadeInWhenVisible>
                ))}
            </div>       

        </main>
    );
}

DesignContainer.defaultProps = {
    color: "black",
    fontColor: "white",
    noisy: false
}

export default DesignContainer;