import React, {useContext} from 'react'
import '../../src/styles/dashboard.css'
import RoundButton from "./RoundButton";
import {UserContext} from "../UserContext";
import {useNavigate} from "react-router-dom";

function SideMenu({buttons}){
    const {user} = useContext(UserContext);
    async function logout() {
        Object.assign(user, null);
        try {
            // Call the logout endpoint
            const response = await fetch('http://localhost:8080/logout', {
                method: 'POST',
                credentials: 'include', // Ensures cookies are sent with the request
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                console.log('Logout successful');

                // Clear user context
                Object.assign(user, null);
            } else {
                console.error('Failed to logout:', response.statusText);
            }
        } catch (error) {
            console.error('Error during logout:', error);
        }

    }
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
                        href={"/"}
                        styleClass="log-out-btn"
                        onClick={logout}
                    />
                </div>
              </div>
          </div>
      </>
    );
}
export default SideMenu;