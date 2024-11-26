import React, {useContext} from "react";
import IconDisplayer from "./IconDisplayer";
import {UserContext} from "../UserContext";

function Visit(date, time, vetName, vetSurname, petName, classStyle, icon, iconClass) {
    const {user} = useContext(UserContext);
    return(
        <div className={classStyle}>
            <div className="dateTimeholder"></div>
            <div className="visitMainHolder">
                <IconDisplayer
                    iconName={icon}
                    styleClass={iconClass}
                />
                <div className="visitInfoHolder"></div>
            </div>

        </div>
    );
}
export default Visit;