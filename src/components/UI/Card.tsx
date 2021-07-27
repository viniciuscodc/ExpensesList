import React from "react";
import "src/components/UI/Card.css";


export default function Card(props:any){
    var classes:string = "card " + props.className;
    return(
        <div className={classes}>{props.children}</div>
    )
}