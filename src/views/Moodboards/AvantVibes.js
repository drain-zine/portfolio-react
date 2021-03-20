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
    
    return(
        <DesignContainer data={data} title={"Avant Vibes"} color={"white"} fontColor={"black"} />
    );
}
export default AvantVibes;