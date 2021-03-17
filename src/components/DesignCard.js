const DesignCard = ({design}) => {

    return(
        <div class={"mt-" + design.spacing_top.toString() + " ml-"+ design.spacing_left.toString()}>

            {/* addressing format nm -> n = row, m = col */}
            {/* image row - we use require on img source for same behaviour as importing it */}
            <div className="flex-grid">
                <div className="col"><p>{design.text_1x1}</p></div> 
                <div className="col"><img src={design.img}/></div>
                <div className="col"><p>{design.text_1x3}</p></div>
            </div>

            {/* lower content panel */}
            <div className="flex-grid">
                <div className="col"><p>{design.text_2x1}</p></div>
                <div className="col"><p>{design.text_2x2}</p></div>
                <div className="col"><p>{design.text_2x3}</p></div>
            </div>
        </div>

    );
}


export default DesignCard;