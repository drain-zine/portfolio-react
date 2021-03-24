import React from 'react';
import { Link } from 'react-router-dom';

import CardImg from './CardImg';

const DesignCard = ({design,docHeight,lineRandYOffset}) => {

    var pos = design.rand_x ? Math.floor(Math.random() * 5).toString() : design.x_pos;
    const ConditionalLink = ({ children, to, condition }) => (!!condition && to)
      ? <Link to={to}>{children}</Link>
      : <>{children}</>;

    if(design.type === 1){
        return(
           <div style={{width: design.card_width+"%"}} className={(design.link? 'cardLink' : '') + " cardContainer flex mt-" + design.spacing_top.toString() + " pb-" + design.spacing_bottom.toString() +" mlr-"+pos}>

            
            <div style={{width: design.img_size+"%"}} className="imgContainer flex-1 relative">
                <svg viewBox={"0 0 100 " + docHeight} className="absolute z-0" id="line-svg" height={docHeight} style={{transform: "translateY(-"+lineRandYOffset+"%)"}}>
                    <line x1="50%" y1="0%" x2="50%" y2="100%"  className="line-path" fill="none" stroke="white" strokeWidth="1" />
                </svg>
                <ConditionalLink to={design.link_url} condition={design.link}>
                    <CardImg src={design.img} size={design.img_size}/>      
                </ConditionalLink>
            </div>
            <div className="textContainer flex-1"><p>{design.text_1}</p></div>
        </div>

        );
    }else if(design.type === 2){
        return(
            <div style={{width: design.card_width+"%"}} className={"cardContainer flex mt-" + design.spacing_top.toString() + " pb-" + design.spacing_bottom.toString() +" mlr-"+pos}>

                <div className="textContainer flex-1"><p>{design.text_1}</p></div>
                <div style={{width: design.img_size+"%"}} className="imgContainer relative">
                    <svg viewBox={"0 0 100 " + docHeight} className="absolute z-0" id="line-svg" height={docHeight} style={{transform: "translateY(-"+lineRandYOffset+"%)"}}>
                        <line x1="50%" y1="0%" x2="50%" y2="100%"  className="line-path" fill="none" stroke="white" strokeWidth="1" />
                    </svg>
                    <CardImg src={design.img} size={design.img_size}/>
                </div>
            </div>
        );

    }else if(design.type === 3){
        return (
            <div style={{width: design.card_width+"%"}} className={"cardContainer flex mt-" + design.spacing_top.toString() + " pb-" + design.spacing_bottom.toString() +" mlr-"+pos}>
                <div className="imgContainer relative flex-2">
                <svg viewBox={"0 0 100 " + docHeight} className="absolute z-0" id="line-svg" height={docHeight} style={{transform: "translateY(-"+lineRandYOffset+"%)"}}>
                        <line x1="50%" y1="0%" x2="50%" y2="100%"  className="line-path" fill="none" stroke="white" strokeWidth="1" />
                    </svg>
                    <ConditionalLink to={design.link_url} condition={design.link}>
                        <CardImg src={design.img} size={design.img_size}/>      
                    </ConditionalLink>
                </div>
                <div className="paragraphContainer flex-1 flex">
                    <div id="col_1" className="textContainer flex-1 ml-1"><p>{design.text_1}</p></div>
                    <div id="col_2" className="textContainer flex-1 ml-1"><p>{design.text_2}</p></div>
                </div>
            </div>
        );
    }else if(design.type === 4){
        return (
            <div style={{width: design.card_width+"%"}} className={"cardContainer flex mt-" + design.spacing_top.toString() + " pb-" + design.spacing_bottom.toString() +" mlr-"+pos}>

                <div style={{width: design.img_size+"%"}} className="imgContainer flex-1 relative">
                    <svg viewBox={"0 0 100 " + docHeight} className="absolute z-0" id="line-svg" height={docHeight} style={{transform: "translateY(-"+lineRandYOffset+"%)"}}>
                        <line x1="50%" y1="0%" x2="50%" y2="100%"  className="line-path" fill="none" stroke="white" strokeWidth="1" />
                    </svg>
                    <CardImg src={design.img} size={design.img_size}/>
                </div>
            </div>
        );
    }else if(design.type === 5){
        return (
            <div style={{width: design.card_width+"%"}} className={"cardContainer flex mt-" + design.spacing_top.toString() + " pb-" + design.spacing_bottom.toString() +" mlr-"+pos}>
                <div style={{width: design.img_size+"%"}} className="imgContainer relative flex-1">
                    <svg viewBox={"0 0 100 " + docHeight} className="absolute z-0" id="line-svg" height={docHeight} style={{transform: "translateY(-"+lineRandYOffset+"%)"}}>
                        <line x1="50%" y1="0%" x2="50%" y2="100%"  className="line-path" fill="none" stroke="white" strokeWidth="1" />
                    </svg>
                    <CardImg src={design.img} size={design.img_size}/>
                    
                </div>
                <div className="paragraphContainer flex-1 flex flex-col">
                    <div id="row_1" className="textContainer flex-initial ml-1"><p>{design.text_1}</p></div>
                    <div id="row_2" className="textContainer flex-initial mt-3 ml-1"><p>{design.text_2}</p></div>
                </div>
            </div>
        );
    }else if(design.type === 6){
        return (
            <div style={{width: design.card_width+"%"}} className={"cardContainer flex mt-" + design.spacing_top.toString() + " pb-" + design.spacing_bottom.toString() +" mlr-"+pos}>
                <div className="paragraphContainer flex-1 flex flex-col">
                    <div id="row_1" className="textContainer flex-initial ml-1"><p>{design.text_1}</p></div>
                    <div id="row_2" className="textContainer flex-initial mt-3 ml-1"><p>{design.text_2}</p></div>
                </div>
                <div style={{width: design.img_size+"%"}} className="imgContainer flex-inital relative">
                    <svg viewBox={"0 0 100 " + docHeight} className="absolute z-0" id="line-svg" height={docHeight} style={{transform: "translateY(-"+lineRandYOffset+"%)"}}>
                        <line x1="50%" y1="0%" x2="50%" y2="100%"  className="line-path" fill="none" stroke="white" strokeWidth="1" />
                    </svg>
                    <CardImg src={design.img} size={design.img_size}/>
                    
                </div>
            </div>
        );
    }else if(design.type === 7){
        return (
            <div style={{width: design.card_width+"%"}} className={"cardContainer flex mt-" + design.spacing_top.toString() + " pb-" + design.spacing_bottom.toString() +" mlr-"+pos + " text-sm"}>
                <div className="paragraphContainer flex-1 flex">
                    <div id="col_1" className="textContainer flex-1 ml-1"><p>{design.text_1}</p></div>
                    <div id="col_2" className="textContainer flex-1 ml-1"><p>{design.text_2}</p></div>
                    <div id="col_3" className="textContainer flex-1 ml-1"><p>{design.text_3}</p></div>
                    <div id="col_4" className="textContainer flex-1 ml-1"><p>{design.text_4}</p></div>
                    <div id="col_5" className="textContainer flex-1 ml-1"><p>{design.text_5}</p></div>
                    <div id="col_6" className="textContainer flex-1 ml-1"><p>{design.text_6}</p></div>
                    <div id="col_7" className="textContainer flex-1 ml-1"><p>{design.text_7}</p></div>
                    <div id="col_8" className="textContainer flex-1 ml-1"><p>{design.text_8}</p></div>
                </div>
            </div>
        );
    }
}



export default DesignCard;