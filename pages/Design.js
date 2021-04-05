import { useEffect, useState } from 'react';
import $ from 'jquery'; 

import DesignContainer from '../components/DesignContainer';
import Menu from '../components/Menu.js';

import {data_raw} from '../data/Designs.js';

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
        <div>
            <DesignContainer data={data} title={"Designs"} color={"black"} fontColor={"white"} />
            <Menu />
        </div>
    );
}
export default Design;