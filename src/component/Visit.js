import React, {useContext} from "react";
import IconDisplayer from "./IconDisplayer";
import {UserContext} from "../UserContext";
import '../../src/styles/visit.css'

function Visit({id, date, time, vetName, vetSurname, petName, classStyle, icon, iconClass, type}) {
    const {user} = useContext(UserContext);
    const handleBooking = async () => {
        console.log("Booking visit...");
        console.log(user.email)
        // Implement booking logic here
        try {
            const response = await fetch("http://localhost:8080/visits/book-visit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    visitId: id, // ID of the visit
                    email: user.email,
                    petName: petName, // Name of the pet

                }),
            });

            if (!response.ok) {
                throw new Error(`Failed to book visit: ${response.status}`);
            }

            const result = response.text();
            console.log("Visit booked successfully:", result);

            // Optional: Handle UI updates or notifications here
        } catch (error) {
            console.error("Error booking visit:", error);
        }

    };

    // Function to handle canceling the visit
    const handleCancel = async () => {
        console.log("Canceling visit...", id);
        // Implement canceling logic here

        try {
            const response = await fetch(`http://localhost:8080/visits/cancel-visit?visitId=${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error(`Failed to book visit: ${response.status}`);
            }

            const result = response.text();
            console.log("Visit cancelled successfully:", result);

            // Optional: Handle UI updates or notifications here
        } catch (error) {
            console.error("Error booking visit:", error);
        }
    };
    return(
        <div className="visit vis-free">
            <div className="date-time-holder">
                <p>{date} {time}</p>
            </div>
            <hr/>
            <div className="visit-main-holder">
               <div className="inner-left-visit">
                   <IconDisplayer
                       iconName={icon}
                       styleClass={iconClass}
                   />
                   <div className="visit-info-holder">
                       {type === "completed" &&
                       <p>{petName}</p>
                       }
                       <p>{vetName} {vetSurname}</p>
                   </div>
               </div>
                <div className="inner-right-visit">
                    {type === "free" && (
                        <button className="btn book-cancel-btn"
                        onClick={handleBooking}
                        >book</button>
                    )}
                    {type === "booked" && (
                        <button className="btn book-cancel-btn"
                                onClick={handleCancel}
                        >cancel</button>
                    )}
                </div>
            </div>
        </div>
    );
}
export default Visit;