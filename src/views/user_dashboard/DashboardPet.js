import React, {useContext, useEffect, useState} from "react";
import SideMenu from "../../component/SideMenu";
import { useParams } from 'react-router-dom';
import '../../styles/pets.css';
import '../../styles/services.css'

import {UserContext} from "../../UserContext";
import IconDisplayer from "../../component/IconDisplayer";

function DashboardPet(){
    const {user} = useContext(UserContext);
    const mail = user.email;
    const { petName } = useParams();
    const [petData, setPetData] = useState(null);
    const [loading, setLoading] = useState(true);

    const buttons = [
        {label: 'New visit', href:'/dashboard/new-visit'},
        {label: 'My pets', href:'/dashboard/my-pets'},
        {label: 'My pet groups', href:'/dashboard/my-pet-groups'},
        {label: 'Visits', href:'/dashboard/visits'},
    ]
    useEffect(() => {
        const fetchPetData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/base-pet?email=${mail}&name=${encodeURIComponent(petName)}`);
                if (!response.ok) {
                    throw new Error(`Error fetching pet data: ${response.statusText}`);
                }
                const data = await response.json();
                setPetData(data);
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false); // Stop loading once the fetch is complete
            }
        };

        fetchPetData();
    }, [petName]); // Dependency array ensures the effect runs only when petName changes

    return(
        <div className="all-holder">
            <SideMenu buttons={buttons}/>
            <div className="content-holder">
                <div className="centring-main">
                    <h2 className="site-tracker">My pet</h2>
                    <div className="visit vis-free pet-desc">
                        <div className="pet-info-holder">

                            <div className="inner-left-visit left-pet">
                                <IconDisplayer
                                    iconName="cat"
                                    styleClass="mypet-icon"
                                />
                                <div className="pet-details-holder">
                                    <h2>{petName}</h2>
                                    {loading === false &&
                                        <div className="pet-details">
                                            <p>{petData?.type || "Unknown"}</p>
                                            <p>{petData?.breed || "Unknown"}</p>
                                            <p>Birth date: { petData?.birthDate|| "Unknown"}</p>
                                        </div>
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DashboardPet;