import { useState } from 'react';
import DesignCard from './DesignCard';

import {designs_raw} from './../data/Designs.js';

const Design = () => {
    const [designs] = useState(designs_raw);

    return(
        <main className="lander flex-grid mt-24">
            <div className="col inline-block ml-24 z-20 w-1/2 mr-0">
                <h1>Design</h1>
            </div>

            <div className="w-1/2 col">
                {/* map each new design card to a position in the landing page table */}
                {designs.map((design) => {
                    if(design.x_pos === 1){
                        return(
                            <div className="flex-grid cardContainer">
                                <div className="col"><DesignCard design={design}/></div>
                                <div className="col"></div>
                                <div className="col"></div>
                            </div>
                        );
                    }else if(design.x_pos === 2){
                        return(
                            <div className="flex-grid cardContainer">
                                <div className="col"></div>
                                <div className="col"><DesignCard design={design}/></div>
                                <div className="col"></div>
                            </div>
                        );
                    }else{
                        return(
                            <div className="flex-grid cardContainer">
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"><DesignCard design={design}/></div>
                            </div>
                        );
                    }
                })}
            </div>
        </main>
    );
}
export default Design;