import React, {useContext, useState} from "react";
import '../../index.css'
import '../../../src/styles/dashboard.css'
import '../../../src/styles/vetdashboard.css'
import SideMenu from "../../component/SideMenu";
import {UserContext} from "../../UserContext";
import List from "../../component/List";
import Visit from "../../component/Visit";
import DetailedVisit from "../../component/DetailedVisit";

function DashBoardHome(){
    const {user} = useContext(UserContext);
    const [view, setView] = useState("list");
    const visits = [
        {date: '2024-10-12', time:'12:30', petName: 'Cookie', ownerName:'Catherine', ownerSurname:'Smith'},
        {date: '2024-10-12', time:'12:30', petName: 'Cookie', ownerName:'Catherine', ownerSurname:'Smith'},
        {date: '2024-10-12', time:'12:30', petName: 'Cookie', ownerName:'Catherine', ownerSurname:'Smith'},
        {date: '2024-10-12', time:'12:30', petName: 'Cookie', ownerName:'Catherine', ownerSurname:'Smith'},

    ];
    const buttons = [
        {label: 'Incoming today', href:'/dashboard/incoming'},
        {label: 'My schedule', href:'/dashboard/my-schedule'},
        {label: 'New prescription', href:'/dashboard/new-prescription'},
    ]

    return(
        <div className="all-holder">
            <SideMenu buttons={buttons}/>
            <div className="content-holder">
                <div className="centring-main">
                    <h2 className="site-tracker">IncomingToday</h2>
                    {view === "list" && <List
                        items = {visits.map((visit, index) => (
                            <DetailedVisit
                                key={index}
                                id={visit.id}
                                date={visit.date}
                                time={visit.time}
                                vetName={visit.ownerName}
                                vetSurname={visit.ownerSurname}
                                petName={visit.petName}
                                icon="checkup"
                                iconClass="vis-icon"
                                type="completed"
                            />
                        ))}
                        styleClass={"list-holder"}
                        itemsPerPage={4}
                    />}
                </div>
            </div>
        </div>
    );
}
export default DashBoardHome;