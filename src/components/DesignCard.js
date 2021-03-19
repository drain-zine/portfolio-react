import React, { useEffect } from 'react';

const DesignCard = ({design,docHeight}) => {

    var pos = Math.floor(Math.random() * 5).toString();

    if(design.type === 1){
        return(
           <div className={"cardContainer flex mt-" + design.spacing_top.toString() + " mb-" + design.spacing_bottom.toString() +" mlr-"+pos}>

            
            <div className="imgContainer flex-1 relative">
                <svg viewBox={"0 0 100 " + docHeight} className="absolute z-0" id="line-svg" height={docHeight}>
                    <line x1="50%" y1="0%" x2="50%" y2="100%"  id="line-path" fill="none" stroke="white" strokeWidth="1" />
                </svg>
                <img className="absolute z-10" src={design.img}/>      
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