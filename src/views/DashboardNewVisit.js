import React from "react";
import SideMenu from "../component/SideMenu";

function DashboardNewVisit(){
    return(
        <div className="all-holder">
            <SideMenu/>
            <div className="content-holder">
                <div className="centring-main">
                    <h2 className="site-tracker">New visit</h2>
                </div>
            </div>
        </div>
    );
}
export default DashboardNewVisit;