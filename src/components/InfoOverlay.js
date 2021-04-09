import React from 'react';

const InfoOverlay = ({data}) => {
   
    return(
        <div className="relative  my-8" >
            <img className={data.type+"-org w-2/3 mx-auto"} src={data.src}/>
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-cloister text-4xl text-red-600">{data.info}</p> 
        </div>
    );
}

export default InfoOverlay;