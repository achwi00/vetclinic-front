import React from "react";
import SideMenu from "../component/SideMenu";

function DashboardMyPetGroups(){
    return(
        <div className="all-holder">
            <SideMenu/>
            <div className="content-holder">
                <div className="centring-main">
                    <h2 className="site-tracker">My pet groups</h2>
                </div>
            </div>
        </div>
    );
}
export default DashboardMyPetGroups;