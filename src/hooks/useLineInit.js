import React, { useEffect, useState, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

import $ from 'jquery'; 
   
const useLineInit= (myRef,containerHeight) => {
    const [docHeight, setDocHeight] = useState(0);
    const [strokeDasharray, setStrokeDasharray] = useState(0);
    const [strokeDashoffset, setStrokeDashoffset] = useState(0);
    const [lineRandYOffset, setLineRandYOffset] = useState(0);

    let location = useLocation();
    
    const handleInit= () => {
        var startingLength = 3;
        var card = myRef.current.parentElement.parentElement;
        
       /*  console.log("[HANDLE] DETECTING RESIZE"); */
        // vars for scroll anim
        const path = myRef.current.firstElementChild;
        var pathLength = 0;

        let rand_offset = 3+Math.floor(Math.random() * 4);
        setLineRandYOffset(rand_offset);

        var cardContainerParentHeight=$("main").outerHeight(true);
        /* var cardContainerParentHeight=test; */
        var card_y = card.getBoundingClientRect().top;
     

        console.log("[HANDLE] INIT LINE Height:  " + cardContainerParentHeight);
        var pathLength = (cardContainerParentHeight - card_y)*(1+(rand_offset/100));

        setDocHeight(pathLength);
        setStrokeDasharray(pathLength + ' ' + pathLength);
        setStrokeDashoffset(pathLength - startingLength);
    }
  
    // on init load
    useEffect(() => {
      myRef.current && window.addEventListener('load', handleInit);
  
      return () => {
        window.removeEventListener('load', handleInit);
      }
    }, [myRef]);

    // on route change
    useEffect(() => {
      let test = 0;
    
     
        var body = document.body,
         html = document.documentElement;

      var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
        console.log("[ROUTE CHECK] jquery: " + $(document).height() + " scroll height: " + height);
        
        /* myRef.current && handleInit(); */
        myRef.current && handleInit();

    }, [containerHeight]);

    return { docHeight, strokeDasharray, strokeDashoffset, lineRandYOffset };
}

export default useLineInit;