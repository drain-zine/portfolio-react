import React, { useEffect, useState } from 'react';
import $ from 'jquery'; 
   
const useLineInit= (myRef) => {
    const [docHeight, setDocHeight] = useState(0);
    const [strokeDasharray, setStrokeDasharray] = useState(0);
    const [strokeDashoffset, setStrokeDashoffset] = useState(0);
    const [lineRandYOffset, setLineRandYOffset] = useState(0);
  
    const handleInit= () => {
        var startingLength = 3;

        var card = myRef.current.parentElement.parentElement;
        
        
    
        // vars for scroll anim
        const path = myRef.current.firstElementChild;
        var pathLength = 0;

        let rand_offset = 3+Math.floor(Math.random() * 4);
        setLineRandYOffset(rand_offset);

        var cardContainerParentHeight=$("main").outerHeight(true);
        var card_y = card.getBoundingClientRect().top;
        console.log("test " + cardContainerParentHeight);
        var pathLength = (cardContainerParentHeight - card_y)*(1+(rand_offset/100));

        setDocHeight(pathLength);
        setStrokeDasharray(pathLength + ' ' + pathLength);
        setStrokeDashoffset(pathLength - startingLength);
    }
  
    useEffect(() => {
      myRef.current && window.addEventListener('load', handleInit);
  
      return () => {
        window.removeEventListener('load', handleInit);
      }
    }, [myRef])
  
    return { docHeight, strokeDasharray, strokeDashoffset, lineRandYOffset };
}

export default  useLineInit;