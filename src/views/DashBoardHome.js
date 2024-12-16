import React, {useContext} from "react";
import '../index.css'
import '../../src/styles/dashboard.css'
import SideMenu from "../component/SideMenu";
import {UserContext} from "../UserContext";

function DashBoardHome(){
    const {user} = useContext(UserContext);

    function returnButtons(user){
        const {role} = user;
        switch (role) {
            case 'CLIENT':
                return [
                    {label: 'New visit', href:'/dashboard/new-visit'},
                    {label: 'My pets', href:'/dashboard/my-pets'},
                    {label: 'My pet groups', href:'/dashboard/my-pet-groups'},
                    {label: 'Visits', href:'#'},
                ]
            case 'VET':
                return [
                    {label: 'Incoming today', href:'#'},
                    {label: 'My schedule', href:'#'},
                    {label: 'New prescription', href:'/dashboard/new-prescription'},
                ]
            case 'RECEPTIONIST':
                return [
                    {label: 'Schedules', href: '#'},
                    {label: 'New visit', href: '#'}
                ]
            default:
                return []
        }
    }
    const buttons = returnButtons(user);

    return(
        <div className="all-holder">
            <SideMenu buttons={buttons}/>
            <div className="content-holder">
                <div className="centring-main">
                    <h2 className="site-tracker">Home to {user.email}</h2>
                </div>
            </div>
        </div>
    );
}
export default DashBoardHome;