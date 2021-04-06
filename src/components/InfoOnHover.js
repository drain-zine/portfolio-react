import React from 'react';

const InfoOnHover = (props) => {
    const {data} = props;
    const active_z = "z-10";
    const hidden_z = "z-0";

    // displayInfo on mouse over - we render images on page view and hide the "active" img
    // underneath the normal image. This massively reduces browser load in comparison to swappning
    // image source on object hover.
    function displayInfo(){
        var stage = document.getElementById("info");
        stage.innerHTML = data.info;

        if(stage.classList.contains("invisible")){
            stage.classList.remove("invisible");
            stage.classList.add("fade-in");           
        }

        var org = document.getElementsByClassName(data.type + "-org")[0];
        var active = document.getElementsByClassName(data.type + "-active")[0];

        org.classList.remove(active_z);
        org.classList.add(hidden_z);

        active.classList.remove(hidden_z);
        active.classList.add(active_z);
    }

    // reset info
    function resetImg(){
        var stage = document.getElementById("info");

        var org = document.getElementsByClassName(data.type + "-org")[0];
        var active = document.getElementsByClassName(data.type + "-active")[0];

        active.classList.remove(active_z);
        active.classList.add(hidden_z);

        //stage.classList.add("fade-out");

        org.classList.remove(hidden_z);
        org.classList.add(active_z);
    }

    return(
        <div id={data.type} className="relative cursor-pointer" onMouseOver={displayInfo} onMouseOut={resetImg} >
            <img className={data.type+"-org "+ active_z + " top-0 absolute  w-" + data.size} src={data.src}/>
            {/* <img  className={"invisible inline w-" + data.size} src={data.src}/> */}
            <img className={data.type+"-active "+ hidden_z + " top-0 absolute w-" + data.size} src={data.active_src}/>
        </div>
    );
}

export default InfoOnHover;