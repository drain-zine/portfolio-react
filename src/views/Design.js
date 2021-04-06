import { useEffect, useState } from 'react';
import $ from 'jquery'; 

import DesignContainer from '../components/DesignContainer';
import Menu from '../components/Menu';

import {data_raw} from '../data/Designs.js';

import psychogeographie from '../assets/static/psychogeographie2.png';
import fluxusPurge from '../assets/static/fluxusPurge.png';

const Design = () => {
    // state decs
    const [data] = useState(data_raw);

    useEffect(() => {
        /* Fade in Elements */
        $(".cardContainer").each(function(i) {   
            $(this).delay((500) * (i+1)).fadeTo((750),1);
        });
        
    });
    
    return(
        <div className="relative flex flex-col noisy">
            <DesignContainer data={data} title={"Designs"} noisy={true} />
            
            {/* backing images */}

            <img id="psychogeographie" src={psychogeographie} />
            <img id="fluxusPurge" src={fluxusPurge} />
            <Menu />
        </div>
    );
}
export default Design;