import React from "react";
import '../index.css'
import '../../src/styles/dashboard.css'
import SideMenu from "../component/SideMenu";

function DashBoardHome(){
    return(
        <div className="all-holder">
            <SideMenu/>
            <div className="content-holder">
                <div className="centring-main">
                    <h2 className="site-tracker">Home</h2>
                </div>
            </div>
        </div>
    );
}
export default DashBoardHome;