import React, { useEffect } from 'react'
import $ from 'jquery'; 

const Menu = () => {


    useEffect(() => {
        // vars for menu fades
        const delayTime = 150;
        const fadeTime = 300;

        $.fn.reverse = [].reverse;
        $(".menuBtn").mouseenter(function(){
            $(".menu div").reverse().each(function(i) {   
                $(this).delay(delayTime * i).fadeTo(fadeTime,1);
            });
        });

        $(".dropdown").mouseleave(function(){
            console.log("Hello");
            $(".menu div").each(function(i) {   
                $(this).delay(delayTime * i).fadeTo(fadeTime,0);
            });
        });
    });

    return(
        <div className="dropdown fixed flex flex-col m-8 p-3 ">
            <div className="menu">
                <div><a href="/index.html">Home</a></div>
                <div><a href="/portfolio.html">Portfolio</a></div>	
                <div><a href="/contact.html">Contact</a></div>	
            </div>

            <div className="menuBtn cursor-pointer">
                <h3>Menu</h3>
            </div>
        </div>
    );
};

export default Menu;