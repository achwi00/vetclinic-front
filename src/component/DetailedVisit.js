import React, {useContext} from "react";
import IconDisplayer from "./IconDisplayer";
import {UserContext} from "../UserContext";
import '../../src/styles/visit.css'
import '../../src/styles/vetdashboard.css'

function DetailedVisit({id, date, time, vetName, vetSurname, petName, classStyle, icon, iconClass, type, onAddDetails}) {
    const {user} = useContext(UserContext);

    return(
        <div className="visit vis-detailed">
            <div className="date-time-holder detailed">
                <p>{date} {time}</p>
            </div>
            <hr/>
            <div className="visit-main-holder detailed-holder">
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

                </div>
            </div>
            <div className="more-details" onClick={onAddDetails}>
                <p>Add details</p>
            </div>
        </div>
    );
}
export default DetailedVisit;