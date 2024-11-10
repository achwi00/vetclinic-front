import React from "react";
import '../services.css';
import IconDisplayer from "./IconDisplayer";

function Box({iconName, iconStyle, title, descrPart1, descrPart2, styleClass, titleStyle, descrStyle}){
    return(
        <div className={styleClass}>
            <IconDisplayer
                styleClass={iconStyle}
                iconName={iconName}
            />
            <h2 className={titleStyle}>{title}</h2>
            <h3 className={descrStyle}>{descrPart1}</h3>
            <h3 className={descrStyle}>{descrPart2}</h3>
        </div>
    );
}
export default Box;