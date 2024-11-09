import React from "react";
import '../services.css';

function Box({title, descrPart1, descrPart2, styleClass, titleStyle, descrStyle}){
    return(
        <div className={styleClass}>
            <h2 className={titleStyle}>{title}</h2>
            <h3 className={descrStyle}>{descrPart1}</h3>
            <h3 className={descrStyle}>{descrPart2}</h3>
        </div>
    );
}
export default Box;