import React, { useEffect, useLayoutEffect, useState} from 'react';

const DesignCard = ({design}) => {
    const [docHeight, setDocHeight] = useState(0);

    var pos = Math.floor(Math.random() * 5).toString();

    // animate lines
    useEffect(() => {
        var cardContainer = document.getElementsByClassName("cardContainer")[0].parentElement;
        setDocHeight(cardContainer.offsetHeight);
        console.log(cardContainer.offsetHeight);

        const path = document.getElementById('line-path');
        var pathLength = 0
        
        var lastScrollTop = 0;
        var scrollUp = false;

        process.nextTick(() => {
            pathLength = path.getTotalLength()
            path.style.strokeDasharray = pathLength + ' ' + pathLength;
            path.style.strokeDashoffset = pathLength; 
        });
        

        var drawLength = 0;
        var lastDrawLength = 0;
    
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

    if(design.type === 1){
        return(
           <div className={"cardContainer flex mt-" + design.spacing_top.toString() + " mb-" + design.spacing_bottom.toString() +" mlr-"+pos}>

            
            <div className="imgContainer flex-1 relative">
                <svg viewbox={"0 0 100 100" /* + docHeight.toString() */} className="absolute z-0" id="line-svg" height={docHeight}>
                    <line x1="50%" y1="0%" x2="50%" y2="100%"  id="line-path" fill="none" stroke="white" stroke-width="1" />
                </svg>
                <img class="absolute z-10" src={design.img}/>      
            </div>
            <div className="textContainer flex-1"><p>{design.text_1}</p></div>
        </div>

        );
    }else if(design.type == 2){
        return(
            <div className={"cardContainer flex mt-" + design.spacing_top.toString() + " mb-" + design.spacing_bottom.toString() +" mlr-"+pos}>

                <div className="textContainer flex-1"><p>{design.text_1}</p></div>
                <div className="imgContainer flex-1"><img src={design.img}/></div>
            </div>
        );

    }else if(design.type === 3){
        return (
            <div className={"cardContainer flex mt-" + design.spacing_top.toString() + " mb-" + design.spacing_bottom.toString() +" mlr-"+pos}>
                <div className="imgContainer flex-1"><img src={design.img}/></div>
                <div className="paragraphContainer flex-1 flex">
                    <div id="col_1" className="textContainer flex-1 ml-1"><p>{design.text_1}</p></div>
                    <div id="col_2" className="textContainer flex-1 ml-1"><p>{design.text_2}</p></div>
                </div>
            </div>
        );
    } 
}



export default DesignCard;