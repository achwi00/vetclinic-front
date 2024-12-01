import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/services.css';
import IconDisplayer from "./IconDisplayer";

function Box({iconName, iconStyle, title, descrPart1, descrPart2, styleClass, titleStyle, descrStyle, navigateTo}){
    const navigate = useNavigate();

    const handleClick = () => {
        if (navigateTo) {
            navigate(navigateTo);
        }
    };
    return(
        <div className={styleClass} onClick={handleClick} style={{ cursor: "pointer" }}>
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