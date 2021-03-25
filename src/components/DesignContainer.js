import { useEffect } from 'react';

import DesignCard from '../components/DesignCard';

const DesignContainer = (props) => {  
    const {data,title,color, fontColor} = props;
        
     // animate lines
     useEffect(() => {
        const paths = document.getElementsByClassName("line-path");

        // vars for upward scrolling behaviour
        var lastScrollTop = 0;
        var scrollUp = false;

        // pre specify this -> allows us to address values
        var lastDrawLengths = new Array(paths.length);

        // scroll event handler
        window.onscroll = () => {
            var drawLength = 0;
            var st = window.pageYOffset || document.documentElement.scrollTop;
            // check if scrolling down
            if(st > lastScrollTop){
                // handle drawing of each path
                
                for(let i = 0; i < paths.length; i++){
                    let pathLength = paths[i].getTotalLength();
                    // only apply if scrolling down, and if beyond current line
                    if(!scrollUp || drawLength >= lastDrawLengths[i]){
                        drawLength = pathLength * ((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight));
                        console.log("p: " + pathLength + " d: " + drawLength);
                        paths[i].style.strokeDashoffset = pathLength - drawLength;
                    
                        // update last draw lengths
                        lastDrawLengths[i] = drawLength;
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
                {data.map((design) => (
                    <DesignCard design={design} fontColor={fontColor}/>
                    
                ))}
            </div>       
        </main>
    );
}

export default DesignContainer;