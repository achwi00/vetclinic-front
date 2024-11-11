import React from 'react'
import '../../src/styles/dashboard.css'
import RoundButton from "./RoundButton";

function SideMenu(){
    const buttons = [
        {label: 'New visit', href:'/dashboard/new-visit'},
        {label: 'My pets', href:'/dashboard/my-pets'},
        {label: 'My pet groups', href:'/dashboard/my-pet-groups'},
        {label: 'Visits', href:'#'},
    ]
    return(
      <>
          <div className="side-menu-holder">
              <div className="centring-panel">
                <div className="side-menu-panel">
                    <RoundButton
                        label="Home"
                        href='/dashboard/home'
                        styleClass="side-menu-button home-button"
                    />
                    <div className="options">
                        {buttons.map((button, index) => (
                            <RoundButton
                                key={index}
                                label={button.label}
                                href={button.href}
                                styleClass="side-menu-button default-button"
                            />
                        ))}
                    </div>
                </div>
                <div className="bottom-panel-holder">
                    <div className="msg">
                        <h3>Hello, Name</h3>
                    </div>
                    <RoundButton
                        label="log out"
                        href={"#"}
                        styleClass="log-out-btn"
                    />
                </div>
              </div>
          </div>
      </>
    );
}
export default SideMenu;