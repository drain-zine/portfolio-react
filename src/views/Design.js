import { useEffect, useState } from 'react';
import $ from 'jquery'; 

import DesignContainer from '../components/DesignContainer';
import Menu from '../components/Menu.js';

import {data_raw} from '../data/Designs.js';

const Design = () => {
    // state decs
    const [data] = useState(data_raw);

    useEffect(() => {
        $(document).scrollTop(0);

        /* Fade in Elements */
        $(".cardContainer").each(function(i) {   
            $(this).delay((400+600) * (i+1)).fadeTo((600+600),1);
        });
        
    });
    
    return(
        <DesignContainer data={data} title={"Designs"} color={"black"} fontColor={"white"} />
    );
}
export default Design;