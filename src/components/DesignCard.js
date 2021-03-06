import React from 'react';

import CardImg from './CardImg';
import  useLineInit  from '../hooks/useLineInit'
import  ConditionalLink from './ConditionalLink'

const DesignCard = (props) => {
    const {design } = props;


    var pos = design.rand_x ? Math.floor(Math.random() * 5).toString() : design.x_pos;

    if(design.type === 1){
        return(
           <div style={{width: design.card_width+"%"}} className={(design.link? 'cardLink' : '') + " cardContainer flex lg:mt-" + design.spacing_top.toString() + " lg:pb-" + design.spacing_bottom.toString() +" lg:"+(pos < 0 ? "-" : "")+ "ml-"+ Math.abs(pos) + "p mmd:flex-col mmd:justify-center mmd:w-full mmd:text-2xl mmd:mb-48 mmd:items-center"}>

            
            <div style={{width: design.img_size+"%"}} className="imgContainer flex-1 relative mmd:w-full mmd:mb-4 mmd:mx-4">
                <ConditionalLink to={design.link_url} condition={design.link}>
                    <CardImg src={design.img} size={design.img_size}/>      
                </ConditionalLink>
            </div>
            <div className="textContainer flex-1"><p>{design.text_1}</p></div>
        </div>

        );
    }else if(design.type === 2){
        return(
            <div style={{width: design.card_width+"%"}} className={"cardContainer flex lg:mt-" + design.spacing_top.toString() + " lg:pb-" + design.spacing_bottom.toString() +" lg:"+(pos < 0 ? "-" : "")+ "ml-"+ Math.abs(pos) + "p mmd:flex-col-reverse mmd:justify-center mmd:w-full mmd:text-2xl mmd:mb-48 mmd:items-center"}>

                <div className="textContainer flex-1 "><p>{design.text_1}</p></div>
                <div style={{width: design.img_size+"%"}} className="imgContainer relative mmd:w-3/4">
                    <ConditionalLink to={design.link_url} condition={design.link}>
                        <CardImg src={design.img} size={design.img_size}/>      
                    </ConditionalLink>
                </div>
            </div>
        );

    }else if(design.type === 3){
        return (
            <div style={{width: design.card_width+"%"}} className={"cardContainer flex lg:mt-" + design.spacing_top.toString() + " lg:pb-" + design.spacing_bottom.toString() +" lg:"+(pos < 0 ? "-" : "")+ "ml-"+ Math.abs(pos) + "p mmd:flex-row mmd:justify-center mmd:w-full mmd:text-2xl mmd:text-left mmd:mb-48 mmd:relative mmd:mx-4"}>
                <div style={{width: design.img_size+"%"}} className="imgContainer relative flex-2 mmd:w-full">
                    <ConditionalLink to={design.link_url} condition={design.link}>
                        <CardImg src={design.img} size={design.img_size}/>      
                    </ConditionalLink>
                </div>
                <div className="paragraphContainer lg:flex-1 flex mmd:absolute mmd:left-1/2 mmd:top-1/2 mmd:z-30 mmd:w-full mmd:transform mmd:-translate-x-1/2 mmd:-translate-y-1/2 mmd:mx-4">
                    <div id="col_1" className="textContainer flex-1 ml-1"><p>{design.text_1}</p></div>
                    <div id="col_2" className="textContainer flex-1 ml-1"><p>{design.text_2}</p></div>
                </div>
            </div>
        );
    }else if(design.type === 4){
        return (
            <div style={{width: design.card_width+"%"}} className={"cardContainer flex lg:mt-" + design.spacing_top.toString() + " lg:pb-" + design.spacing_bottom.toString() +" lg:"+(pos < 0 ? "-" : "")+ "ml-"+ Math.abs(pos) + "p mmd:flex-row mmd:justify-center mmd:w-full  mmd:mb-48 mmd:relative mmd:mx-4"}>

                <div style={{width: design.img_size+"%"}} className="imgContainer flex-1 relative">
                    <CardImg src={design.img} size={design.img_size}/>
                </div>
            </div>
        );
    }else if(design.type === 5){
        return (
            <div style={{width: design.card_width+"%"}} className={" cardContainer flex lg:mt-" + design.spacing_top.toString() + " lg:pb-" + design.spacing_bottom.toString() +" lg:"+(pos < 0 ? "-" : "")+ "ml-"+ Math.abs(pos) + "p mmd:flex-col mmd:justify-center mmd:w-full mmd:text-2xl mmd:mb-48 mmd:items-center"}>
                <div style={{width: design.img_size+"%"}} className="imgContainer relative flex-1 mmd:w-full mmd:mb-4">
                    <CardImg src={design.img} size={design.img_size}/>
                    
                </div>
                <div className="paragraphContainer flex-1 flex flex-col mmd:mx-4">
                    <div id="row_1" className="textContainer flex-initial ml-1"><p>{design.text_1}</p></div>
                    <div id="row_2" className="textContainer flex-initial mt-3 ml-1"><p>{design.text_2}</p></div>
                </div>
            </div>
        );
    }else if(design.type === 6){
        return (
            <div style={{width: design.card_width+"%"}} className={" cardContainer flex lg:mt-" + design.spacing_top.toString() + " lg:pb-" + design.spacing_bottom.toString() +" lg:"+(pos < 0 ? "-" : "")+ "ml-"+ Math.abs(pos) + "p mmd:flex-col mmd:justify-center mmd:w-full mmd:text-2xl mmd:mb-48 mmd:items-center mmd:relative "}>
                <div className="paragraphContainer lg:flex-1 lg:ml-1 flex flex-col mmd:absolute mmd:left-1/2 mmd:top-1/2 mmd:z-10 mmd:px-2 mmd:w-full mmd:transform mmd:-translate-x-1/2 mmd:-translate-y-1/2 mmd:z-30">
                    <div id="row_1" className="textContainer flex-initial  mmd:w-full mmd:mx-auto"><p>{design.text_1}</p></div>
                    <div id="row_2" className="textContainer flex-initial mt-3 mmd:w-full mmd:mx-auto"><p>{design.text_2}</p></div>
                </div>
                <div style={{width: design.img_size+"%"}} className="imgContainer flex-inital relative mmd:w-full">
                    <CardImg src={design.img} size={design.img_size}/>
                    
                </div>
            </div>
        );
    }else if(design.type === 7){
        return (
            <div style={{width: design.card_width+"%"}} className={"cardContainer flex lg:mt-" + design.spacing_top.toString() + " lg:pb-" + design.spacing_bottom.toString() +" lg:"+(pos < 0 ? "-" : "")+ "ml-"+ Math.abs(pos) + "p text-sm mmd:text-left mmd:w-full mmd:mb-48 mmd:mx-4"}>
                <div className="paragraphContainer flex-1 flex mmd:flex-row mmd:flex-wrap">
                    <div id="col_1" className="textContainer lg:ml-4 lg:flex-initial ml-1   mmd:w-3/10 mmd:mb-2 "><p>{design.text_1}</p></div>
                    <div id="col_2" className="textContainer lg:ml-4 lg:flex-initial ml-1 mmd:w-3/10 mmd:mb-2"><p>{design.text_2}</p></div>
                    <div id="col_3" className="textContainer lg:ml-4 lg:flex-initial ml-1  mmd:w-3/10 mmd:mb-2"><p>{design.text_3}</p></div>
                    <div id="col_4" className="textContainer lg:ml-4 lg:flex-initial ml-1 mmd:w-3/10 mmd:mb-2"><p>{design.text_4}</p></div>
                    <div id="col_5" className="textContainer lg:ml-4 lg:flex-initial ml-1  mmd:w-3/10 mmd:mb-2"><p>{design.text_5}</p></div>
                    <div id="col_6" className="textContainer lg:ml-4 lg:flex-initial ml-1  mmd:w-3/10 mmd:mb-2"><p>{design.text_6}</p></div>
                    <div id="col_7" className="textContainer lg:ml-4 lg:flex-initial ml-1  mmd:w-3/10 mmd:mb-2"><p>{design.text_7}</p></div>
                    <div id="col_8" className="textContainer lg:ml-4 lg:flex-initial ml-1 mmd:w-3/10 mmd:mb-2"><p>{design.text_8}</p></div>
                </div>
            </div>
        );
    }
}



export default DesignCard;