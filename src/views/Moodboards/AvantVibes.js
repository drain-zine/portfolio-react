import { useEffect, useState } from 'react';
import $ from 'jquery'; 

import DesignCard from '../../components/DesignCard';
import Menu from '../../components/Menu.js';
import React from 'react';

import DesignContainer from '../../components/DesignContainer';


import {data_raw} from '../../data/Moodboards/AvantVibes.js';

const AvantVibes = () => {
    // state decs
    const [data] = useState(data_raw);

    useEffect(() => {
        $(document).scrollTop(0);

        /* Fade in Elements */
        $(".cardContainer").each(function(i) {   
            $(this).delay((750) * (i+1)).fadeTo((1000),1);
        });
        
    });
    
    return(
        <div>
            <DesignContainer data={data} title={"Avant Vibes"} color={"white"} fontColor={"black"} />
            <Menu fontColor={"black"}/>
        </div>
    );
}
export default AvantVibes;