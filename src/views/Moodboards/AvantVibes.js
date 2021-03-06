import { useEffect, useState } from 'react';
import $ from 'jquery'; 

import Grid from '../../components/Grid';
import Menu from '../../components/Menu.js';
import React from 'react';

import DesignContainer from '../../components/DesignContainer';


import {data_raw} from '../../data/Moodboards/AvantVibes.js';

const AvantVibes = () => {
    // state decs
    const [data] = useState(data_raw);

    useEffect(() => {

        /* Fade in Elements */
        $(".cardContainer").each(function(i) {   
            $(this).delay((750) * (i+1)).fadeTo((1000),1);
        });
        
    });
    
    return(
        <div>
            <DesignContainer data={data} title={"Avant Vibes"} noisy={true}/>
            <Grid />
            <Menu />
        </div>
    );
}
export default AvantVibes;