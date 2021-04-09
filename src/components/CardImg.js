import React, { useRef, useEffect } from 'react';

// we require this little hack as the image must be forced absolute
// such that we can apply the z-index for the line drawing animation
// but we also require the card to contain the image, hence
// anothe markup element of the same img, set to invisible.
const CardImg= (props) => {
    const {src,size} = props;
    const ref = useRef(null);

    return(
        <div>
            <img ref={ref} id="main" className="w-full absolute z-20"src={src}/>    
            <img id="stretcher" className="w-full invisible" src={src}/>  
        </div>
    );
}

export default CardImg;