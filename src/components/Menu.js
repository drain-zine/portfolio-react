import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

import $ from 'jquery'; 

const Menu = (props) => {


    useEffect(() => {
        $.fn.reverse = [].reverse;
        $(".menuBtn").mouseenter(function(){
            $(".menu div").reverse().each(function(i) {   
                $(this).delay(props.delayTime * i).fadeTo(props.fadeTime,1);
            });
        });

        $(".dropdown").mouseleave(function(){
            console.log("Hello");
            $(".menu div").each(function(i) {   
                $(this).delay(props.delayTime * i).fadeTo(props.fadeTime,0);
            });
        });
    });

    return(
        <div className={"dropdown fixed flex flex-col m-8 p-3 z-30 draggable text-left text-" + props.fontColor}>
            <div className="menu">
                <div><Link to="/">Home</Link></div>
                <div><Link to="/design">Design</Link></div>	
                <div><Link to="/contact">Contact</Link></div>	
            </div>

            <div className="menuBtn cursor-pointer">
                <h3>Menu</h3>
            </div>
        </div>
    );
};

Menu.defaultProps = {
    fontColor: "white",
    delayTime: 150,
    fadeTime: 300
}

export default Menu;