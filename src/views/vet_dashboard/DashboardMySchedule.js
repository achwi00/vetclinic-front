import React, {useContext} from "react";
import '../../index.css'
import '../../../src/styles/dashboard.css'
import SideMenu from "../../component/SideMenu";
import {UserContext} from "../../UserContext";

function DashBoardHome(){
    const {user} = useContext(UserContext);

    const buttons = [
        {label: 'Incoming today', href:'/dashboard/incoming'},
        {label: 'My schedule', href:'/dashboard/my-schedule'},
    ]

    return(
        <div className="all-holder">
            <SideMenu buttons={buttons}/>
            <div className="content-holder">
                <div className="centring-main">
                    <h2 className="site-tracker">My schedule</h2>

                </div>
            </div>
        </div>
    );
}
export default DashBoardHome;