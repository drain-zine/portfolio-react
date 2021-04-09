import React from 'react';

const InfoOverlay = ({data}) => {
   
    return(
        <div className="flex flex-col" >
            <img className={data.type+"-org w-2/3 mb-4 ml-2"} src={data.src}/>
            <p className="text-right text-4xl mr-20 mb-4 font-cloister">{data.info}</p> 
        </div>
    );
}

export default InfoOverlay;