import React, {useContext} from "react";
import SideMenu from "../../component/SideMenu";
import { useParams } from 'react-router-dom';
import '../../styles/pets.css'
import {UserContext} from "../../UserContext";

function DashboardPet(){
    const {user} = useContext(UserContext);
    const mail = user.email;
    const { petName } = useParams();
    const buttons = [
        {label: 'New visit', href:'/dashboard/new-visit'},
        {label: 'My pets', href:'/dashboard/my-pets'},
        {label: 'My pet groups', href:'/dashboard/my-pet-groups'},
        {label: 'Visits', href:'/dashboard/visits'},
    ]
    return(
        <div className="all-holder">
            <SideMenu buttons={buttons}/>
            <div className="content-holder">
                <div className="centring-main">
                    <h2 className="site-tracker">My pet</h2>
                    <h2>{petName}</h2>
                </div>
            </div>
        </div>
    );
}
export default DashboardPet;