import React from "react";

const InnerNav = ({ buttons, onButtonClick, styleClass, buttonStyleClass }) => {
    return (
        <nav className={styleClass}>
            {buttons.map((button, index) => (
                <button
                    key={index}
                    onClick={() => onButtonClick(button.view)}
                    className={buttonStyleClass}
                >
                    {button.label}
                </button>
            ))}
        </nav>
    );
};

export default InnerNav;
