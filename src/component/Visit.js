import React, {useContext} from "react";
import IconDisplayer from "./IconDisplayer";
import {UserContext} from "../UserContext";
import '../../src/styles/visit.css'

function Visit({date, time, vetName, vetSurname, petName, classStyle, icon, iconClass}) {
    const {user} = useContext(UserContext);
    return(
        <div className="visit vis-free">
            <div className="date-time-holder">
                <p>{date} {time}</p>
            </div>
            <hr/>
            <div className="visit-main-holder">
                <IconDisplayer
                    iconName={icon}
                    styleClass={iconClass}
                />
                <div className="visit-info-holder">
                    <p>{vetName} {vetSurname}</p>
                </div>
            </div>
        </div>
    );
}
export default Visit;