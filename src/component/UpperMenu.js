import React from 'react';
import RoundButton from './RoundButton';


function UpperMenu() {
    const buttons = [
        {label: 'Services', href:'#services'},
        {label: 'About us', href:'#about-us'},
        // {label: 'Contact', href:'#contact'},
    ]
    return(
        <div className="upper-menu">
            <div className="centring-content in-between">
                <div className="logo-holder">Logo</div>
                <div className="upper-menu-buttons-holder">
                    {buttons.map((button, index) => (
                        <RoundButton
                            key={index}
                            label={button.label}
                            href={button.href}
                            styleClass="upper-menu-button"
                        />
                    ))}
                    <RoundButton
                        label='Log in'
                        href='/login'
                        styleClass="log-button"
                    />
                </div>
            </div>
        </div>
    );
}
export default UpperMenu;