import React from 'react'


function IconDisplayer({iconName, styleClass}){
    const iconMap = {
        checkup: "../icons/checkup-heart.svg",
        surgery: "../icons/surgery-heart.svg",
        vaccine: "../icons/vaccine-heart.svg",
        chip: "../icons/chip-heart.svg",
        medicine: "../icons/medicine-heart.svg",
        support: "../icons/support-heart.svg",
        cat: "../icons/cat-icon.svg",
    };
    const iconPath = iconMap[iconName];
    return (
      <div className={styleClass}>
          {iconPath ? <img src={iconPath} alt={`${iconName} icon`} /> : null}
      </div>
    );
}
export default IconDisplayer;