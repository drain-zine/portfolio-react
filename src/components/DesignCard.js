import React, { useEffect, useState} from 'react';

const DesignCard = ({design}) => {
    const [scrollPercent, setScrollPercent] = useState(0);

    var pos = Math.floor(Math.random() * 5).toString();

    

    

    useEffect(() => {
        const path = document.getElementById('line-path');
        var pathLength = path.getTotalLength();

        path.style.strokeDasharray = pathLength + ' ' + pathLength;
        path.style.strokeDashoffset = pathLength; 

        var drawLength = 0;
        console.log("Path Length: " + pathLength);
    
        window.onscroll = () => {
            setScrollPercent((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight));
            drawLength = pathLength * ((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight));
            path.style.strokeDashoffset = pathLength - drawLength;
            console.log("DrawLength: " + drawLength.toString() + "offset: " + (pathLength - drawLength).toString() );
        }     
      }, []);

    console.log(scrollPercent);

    if(design.type === 1){
        return(
           <div className={"cardContainer flex mt-" + design.spacing_top.toString() + " mb-" + design.spacing_bottom.toString() +" mlr-"+pos}>

            <svg className="absolute" id="line-svg">
                <path id="line-path" className="animate" fill="none" stroke="white" stroke-width="1" d="M1 0 L1 100"/>
            </svg>
            <div className="imgContainer flex-1"><img src={design.img}/></div>
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