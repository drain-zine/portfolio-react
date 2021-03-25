import { useEffect, useState } from 'react';
import $ from 'jquery'; 

import DesignCard from '../../components/DesignCard';
import Menu from '../../components/Menu.js';
import React from 'react';

import DesignContainer from '../../components/DesignContainer';


import {data_raw} from '../../data/Moodboards/DRAINE1.js';

const AvantVibes = () => {
    // state decs
    const [data] = useState(data_raw);
    const fadeIn = 800;
    const fadeDelay = 750;

    useEffect(() => {
        /* Fade in Elements */
        $(".cardContainer").each(function(i) {   
            $(this).delay((fadeDelay) * (i+1)).fadeTo((fadeIn),1);
        });
        
    });
    
    return(
        <div>
            <DesignContainer data={data} title={"Drain E1"} color={"white"} fontColor={"black"} />
            <Menu fontColor={"black"}/>
        </div>
    );
}
export default AvantVibes;