import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import $ from 'jquery'; 

import DesignContainer from '../components/DesignContainer';
import Menu from '../components/Menu';
import Grid from '../components/Grid';
import {data_raw} from '../data/Designs.js';
import energyGrid from '../assets/static/energyGrid.png';
import psychogeographie from '../assets/static/psychogeographie2.png';
import fluxusPurge from '../assets/static/fluxusPurge.png';

const Design = () => {
    // state decs
    const [data] = useState(data_raw);
    /*
        $(".cardContainer").each(function(i) {   
            $(this).delay((500) * (i+1)).fadeTo((750),1);
        });
        
    });
*/

    
    return(
        <div className="relative flex flex-col noisy">
            <DesignContainer data={data} title={"Design"} noisy={true} />
            
            {/* backing images */}
            <img id="energyGrid" src={energyGrid} />
            <img id="psychogeographie" src={psychogeographie} />
            <img id="fluxusPurge" src={fluxusPurge} />
            <Menu />
            {isMobile && <Grid />}
        </div>
    );
}
export default Design;