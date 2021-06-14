import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation} from "framer-motion";
import { translate } from "tailwindcss/defaultTheme";

const ScrollOnSlideWhenVisible = ({children, className, style}) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    const [firstScroll, setFirstScroll] = useState(0);
    const [delX, setDelX] = useState(0);

    const animateScroll = () => {
        var drawLength = 0;
        var init_scroll = 0;
        var st = window.pageYOffset || document.documentElement.scrollTop;
        
        // check if scrolling down
        
        if(firstScroll === 0){
            setFirstScroll((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight))
        }


        const scroll_raw =  ((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight));
        const scroll_norm = 100*(scroll_raw )/8;

        console.log("SCROLL: " + scroll_norm)
        setDelX(scroll_norm);

        // update lastScrollTop
        
    }

    // handle visibilty
    useEffect(() => {
        if(inView){
            controls.start("visible");
            console.log("element visible");
            window.addEventListener('scroll', animateScroll, false);
            
        } else {
           controls.start("hidden");
        }

        return function cleanup() {
            window.removeEventListener('scroll', animateScroll, false);
        };
    }, [controls, inView]);

    return (
        <div className={className} style={Object.assign({}, style, {transform: 'translateX('+delX+'%)'})} ref={ref} >
            {children}
        </div>
      );
}

export default ScrollOnSlideWhenVisible;