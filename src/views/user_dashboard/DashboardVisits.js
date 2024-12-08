import React from "react";
import SideMenu from "../../component/SideMenu";
import InnerNav from "../../component/InnerNav";

function DashboardVisits(){
    const buttons = [
        {label: 'New visit', href:'/dashboard/new-visit'},
        {label: 'My pets', href:'/dashboard/my-pets'},
        {label: 'My pet groups', href:'/dashboard/my-pet-groups'},
        {label: 'Visits', href:'/dashboard/visits'},
    ]
    const nav = [
        {id:'prev-vis-btn', label:'Previous', view:'previous'},
        {id:'planned-vis-btn',label:'Planned', view:'planned'}
    ]
    return(
        <div className="all-holder">
            <SideMenu buttons={buttons}/>
            <div className="content-holder">
                <div className="centring-main">
                    <h2 className="site-tracker">My visits</h2>
                    <InnerNav
                        buttons={nav}
                        styleClass="visits-nav"
                        buttonStyleClass="nav-btn"
                    />
                </div>
            </div>
        </div>
    );
}
export default DashboardVisits;