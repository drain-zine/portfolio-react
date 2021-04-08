import React from "react";
import { isMobile } from "react-device-detect";

const Grid = () => {

    if(isMobile){
        return(
            <div className="gridLines mmd:px-2">
                <div className="cell"></div>
                <div className="cell"></div>
            </div>
        );
    }else{
        return(
            <div className="gridLines mmd:px-2">
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
            </div>
        );
    }
};

export default Grid;