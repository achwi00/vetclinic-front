import React from "react";
import '../index.css'
import '../../src/styles/dashboard.css'
import SideMenu from "../component/SideMenu";

function DashBoardHome(){
    const buttons = [
        {label: 'New visit', href:'/dashboard/new-visit'},
        {label: 'My pets', href:'/dashboard/my-pets'},
        {label: 'My pet groups', href:'/dashboard/my-pet-groups'},
        {label: 'Visits', href:'#'},
    ]
    return(
        <div className="all-holder">
            <SideMenu buttons={buttons}/>
            <div className="content-holder">
                <div className="centring-main">
                    <h2 className="site-tracker">Home</h2>
                </div>
            </div>
        </div>
    );
}
export default DashBoardHome;