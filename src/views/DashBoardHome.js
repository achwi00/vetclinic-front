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
                    {label: 'Visits', href:'/dashboard/visits'},
                ]
            case 'VET':
                return [
                    {label: 'Incoming today', href:'/dashboard/incoming'},
                    {label: 'My schedule', href:'/dashboard/my-schedule'}
                ]
            case 'RECEPTIONIST':
                return [
                    {label: 'Schedules', href: '/dashboard/schedules'},
                    {label: 'New visit', href: '/dashboard/new-visit/reception'}
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