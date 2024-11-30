import React, {useContext} from "react";
import IconDisplayer from "./IconDisplayer";
import {UserContext} from "../UserContext";
import '../../src/styles/visit.css'

function Visit({date, time, vetName, vetSurname, petName, classStyle, icon, iconClass, type}) {
    const {user} = useContext(UserContext);
    const handleBooking = () => {
        console.log("Booking visit...");
        // Implement booking logic here
    };

    // Function to handle canceling the visit
    const handleCancel = () => {
        console.log("Canceling visit...");
        // Implement canceling logic here
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
                       <p>{vetName} {vetSurname}</p>
                   </div>
               </div>
                <div className="inner-right-visit">
                    {type === "free" && (
                        <button className="btn book-cancel-btn">book</button>
                    )}
                </div>
            </div>
        </div>
    );
}
export default Visit;