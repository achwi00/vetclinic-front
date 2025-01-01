import React, {useContext, useEffect, useState} from 'react'
import '../../src/styles/dashboard.css'
import RoundButton from "./RoundButton";
import {UserContext} from "../UserContext";

function SideMenu({buttons}){
    const {user} = useContext(UserContext);
    const email = user.email;
    const [name, setName] = useState("Name");

    useEffect(() => {
        const fetchVisits = async () => {
            try {
                const response = await fetch(
                    `http://localhost:8080/name?uMail=${email}`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );

                if (!response.ok) {
                    new Error(`HTTP error! status: ${response.status}`);
                }

                const fetchedName = await response.text();
                if(response.ok){
                    setName(fetchedName);
                }
            } catch (error) {
                console.error("Error fetching visits:", error);
                setName("User");
            }
        }

        fetchVisits();

    },[email]);

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
                        <h3>Hello, {name}</h3>
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