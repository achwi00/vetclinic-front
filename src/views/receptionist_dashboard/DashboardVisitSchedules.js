import React, {useContext} from "react";
import '../../index.css'
import '../../../src/styles/dashboard.css'
import SideMenu from "../../component/SideMenu";
import {UserContext} from "../../UserContext";

function DashboardVisitSchedules(){
    const {user} = useContext(UserContext);

    const buttons = [
        {label: 'Schedules', href:'/dashboard/schedules'},
        {label: 'New visit', href:'/dashboard/new-visit/reception'},
    ]

    return(
        <div className="all-holder">
            <SideMenu buttons={buttons}/>
            <div className="content-holder">
                <div className="centring-main">
                    <h2 className="site-tracker">Schedules</h2>

                </div>
            </div>
        </div>
    );
}
export default DashboardVisitSchedules;