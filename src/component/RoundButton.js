import React from 'react';
import { Link } from 'react-router-dom';

function RoundButton({label, href, styleClass, onClick}){
    const isInternalLink = href && href.startsWith('/')
    return isInternalLink ? (
        <Link to={href} className={styleClass}>
            <button className={styleClass} onClick={onClick}>
                {label}
            </button>
        </Link>
    ) : (
        <a href={href} className={styleClass}>
            <button className={styleClass}>
                {label}
            </button>
        </a>
    );
}
export default RoundButton;