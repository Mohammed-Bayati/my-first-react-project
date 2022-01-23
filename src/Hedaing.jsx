import React from "react";



function Hedaing(props){
    return(
        <div>
            <h1 className="namtag"> {props.name} </h1>
            <p className="mam">{props.mam}</p>
            
        </div>
    )
}


export default Hedaing;