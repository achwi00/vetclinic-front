import React from 'react';

function RoundButton({label, href, styleClass}){
    return(
        <a href={href}>
            <button className={styleClass}>
                {label}
            </button>
        </a>
    );
}
export default RoundButton;