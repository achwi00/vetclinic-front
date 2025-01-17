import React from "react";

const InnerNav = ({ buttons, styleClass, buttonStyleClass }) => {
    return (
        <nav className={styleClass}>
            {buttons.map((button, index) => (
                <button
                    key={index}
                    id={button.id}
                    onClick={button.onClick}
                    className={buttonStyleClass}
                >
                    {button.label}
                </button>
            ))}
        </nav>
    );
};

export default InnerNav;
