import { useState } from 'react';
import DesignCard from './DesignCard';

import {designs_raw} from './../data/Designs.js';

const Design = () => {
    const [designs] = useState(designs_raw);

    return(
        <main className="lander flex mt-24">
            <div className="flex-initial inline-block ml-24 z-20 mr-0">
                <h1>Design</h1>

                <div className="dropDownContainer fixed"></div>
            </div>

            <div className="flex-initial relative">
                
                    {designs.map((design) => (
                        <DesignCard design={design}/>
                    ))}
                
            </div>
        </main>
    );
}
export default Design;