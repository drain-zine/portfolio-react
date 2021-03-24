import React, { useRef, useEffect } from 'react';

// we require this little hack as the image must be forced absolute
// such that we can apply the z-index for the line drawing animation
// but we also require the card to contain the image, hence
// anothe markup element of the same img, set to invisible.
const CardImg= ({src,size}) => {
    const ref = useRef(null);
    useEffect(() => {
      console.log('width', ref.current ? ref.current.offsetWidth : 0);
    }, [ref.current]);

    return(
        <div>
            <img ref={ref} id="main" className="w-full absolute z-10"src={src}/>    
            <img id="stretcher" className="w-full invisible" src={src}/>  
        </div>
    );
}

export default CardImg;