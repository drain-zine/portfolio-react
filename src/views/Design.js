import { useEffect, useState, useRef } from 'react';
import { isMobile } from 'react-device-detect';
import $ from 'jquery'; 

import DesignContainer from '../components/DesignContainer';
import Menu from '../components/Menu';
import Grid from '../components/Grid';
import {data_raw} from '../data/Designs.js';
import ScrollableLine from '../components/ScrollableLine';
import energyGrid from '../assets/static/energyGrid.png';
import psychogeographie from '../assets/static/psychogeographie2.png';
import fluxusPurge from '../assets/static/fluxusPurge.png';
import ConditionalLink from '../components/ConditionalLink';
import CardImg from '../components/CardImg';
import ScrollOnSlideWhenVisible from '../components/ScrollOnSlideWhenVisible';

const Design = () => {
    // state decs
    const textRef = useRef(null);
    const textOverlayRef = useRef(null);

    const [textOverlayWidth, setTextOverlayWidth] = useState(0);

    useEffect(() => {
        if(textRef.current && textOverlayRef.current){
            setTextOverlayWidth(textRef.current.parentElement.getBoundingClientRect().width);
        }
    }, [textRef, textOverlayRef]);


    return(
        <div className="relative flex flex-col noisy">
            {/* <DesignContainer data={data} title={"Design"} noisy={true} /> */}
        <main className={"text-white lander flex lg:pt-24 mmd:flex mmd:justify-center mmd:flex-col mmd:pt-12 mmd:relative"}>
            <div className="flex-initial lg:inline-block lg:ml-24 z-20 lg:mr-0 relative mmd:text-center">
                <h1 id="title" style={{fontSize: "15rem"}}>Design</h1>
                {!isMobile && <ScrollableLine fontColor={"white"} /> }
            </div>

            <div className="flex-initial relative test mmd:text-center">
                {/* {data.map((design,index) => (
                    <FadeInWhenVisible>
                        <DesignCard design={design} font_size={design.font_size}/>
                    </FadeInWhenVisible>
                ))} */}

          
                <div  className="cardLink cardContainer flex lg:mt-96 lg:-ml-40 mmd:flex-col mmd:justify-center mmd:w-full mmd:text-2xl mmd:mb-48 mmd:items-center opacity-100">

            
                    <div className="imgContainer flex-1 relative mmd:w-full mmd:mb-4 mmd:mx-4">
                        <ConditionalLink to="/moodboards/avant_vibes" condition={true}>
                            <CardImg src={require("./../assets/dynamic/skeleton.gif").default} />      
                        </ConditionalLink>
                    </div>
                    <div className={"lg:text-4xl lg:mt-24 lg:-ml-72 textContainer flex-1"}>
                        <p>Avant Vibes, powered by Monster Energy® is </p>
                        <p className="ml-4"> a weekly delve into the forefront of vibe culture, </p>
                        <p  className="-ml-4">ranging from the most fuego fits to the most</p>
                        <p className="ml-8"> diesel tracks out right now. </p>
                        <p  className="-ml-8">Follow your hosts as they center their chakras,</p>
                        <p> live, laugh, and love in the center of it all. </p>
                        <p className="ml-16"> Peace forever, R.I.P Jerry. </p>
                        <p className="ml-20">- Scraped from “About Page”</p>

                    </div>
                </div>

                <div className={"cardContainer flex lg:mt-80  lg:-ml-80 mmd:flex-row mmd:justify-center mmd:w-full mmd:text-2xl mmd:text-left mmd:mb-48 mmd:relative mmd:mx-4"}>
                    
                    <ScrollOnSlideWhenVisible className={"lg:text-4xl lg:mt-24 lg:-ml-40 lg:-mr-28 paragraphContainer lg:flex-1 flex mmd:absolute mmd:left-1/2 mmd:top-1/2 mmd:z-30 mmd:w-full mmd:transform mmd:-translate-x-1/2 mmd:-translate-y-1/2 mmd:mx-4"}>
                    
                        
                        <div id="col_1" className="textContainer flex-1 ml-1" ref={textRef}><p>Drain Zine Edition 1. An independent student zine focusing on the fringes of art, fashion and music culture. What will you find from down the drain?</p></div>
                        <div id="col_2" className="textContainer flex-1 ml-1" ><p>"Welcome adventurer to this perilous realm. Danger lurks around every corner... however, if you can brave DRAIN's treacheries it is said great knowledge will be bestowed upon thee..."</p></div>
                    </ScrollOnSlideWhenVisible>

                    <div className="lg:overflow-x-hidden imgContainer relative flex-2 mmd:w-full w-1/2">
                        <div className=""><ConditionalLink to="/moodboards/drain_e1" condition={true}>
                            <CardImg src={require("./../assets/static/bird.png").default} size={40}/>      
                        </ConditionalLink></div>
                            
                            <ScrollOnSlideWhenVisible className={"absolute z-20 top-0 mt-24 lg:text-4xl textContainer flex-1 ml-1 text-black"} style ={{right: "85%", width: textOverlayWidth}}>

                            <div id="col_1_overlay"  className="textContainer flex-1 ml-1"><p>Drain Zine Edition 1. An independent student zine focusing on the fringes of art, fashion and music culture. What will you find from down the drain?</p></div>
                        <div id="col_2_overlay" ref={textOverlayRef} className="textContainer flex-1 ml-1"><p>"Welcome adventurer to this perilous realm. Danger lurks around every corner... however, if you can brave DRAIN's treacheries it is said great knowledge will be bestowed upon thee..."</p></div>

                            </ScrollOnSlideWhenVisible>
                    </div>

                </div>
                </div>       

            

        </main>
            {/* backing images */}
            <img id="energyGrid" src={energyGrid} />
            <img id="psychogeographie" src={psychogeographie} />
            <img id="fluxusPurge" src={fluxusPurge} />
            <Menu />
            {isMobile && <Grid />}
        </div>
    );
}
export default Design;