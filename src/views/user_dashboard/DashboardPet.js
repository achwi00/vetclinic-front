import React, {useContext, useEffect, useState} from "react";
import SideMenu from "../../component/SideMenu";
import { useParams } from 'react-router-dom';
import '../../styles/pets.css';
import '../../styles/services.css'

import {UserContext} from "../../UserContext";
import IconDisplayer from "../../component/IconDisplayer";
import InnerNav from "../../component/InnerNav";
import List from "../../component/List";
import Visit from "../../component/Visit";

function DashboardPet(){
    const {user} = useContext(UserContext);
    const mail = user.email;
    const { petName } = useParams();
    const [petData, setPetData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [view, setView] = useState("vaccinations");
    const [vaccination, setVaccination] = useState([]);

    const getVaccinations = async () => {
        document.getElementById('treatments-btn').style.backgroundColor = '#E8C1CE';
        document.getElementById('surgeries-btn').style.backgroundColor = '#E8C1CE';
        document.getElementById('vaccinations-btn').style.backgroundColor = '#D99CB0';

        try{
            const response = await fetch(
                `http://localhost:8080/vaccination?basePetId=${petData.id}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const fetchedVaccinations = await response.json();
            console.log(fetchedVaccinations); // Log the visits data

            let tmpArr = [];
            fetchedVaccinations.forEach(
                vaccination=>{
                    console.log(vaccination);
                    const tmpObj = {
                        id: vaccination.id,
                        date: vaccination.date,
                        medicationName: vaccination.medication.name,
                        medicationBatch: vaccination.medication.batch,
                    }
                    tmpArr.push(tmpObj);
                }
            )
            console.log(tmpArr);
            //set visits and change view to visits from form
            setVaccination(tmpArr);
            setView("vaccinations");
        }catch(error){
            console.log(error)
            console.log("Error fetching visits.")
        }


    }
    const getTreatments = async () => {
        document.getElementById('treatments-btn').style.backgroundColor = '#D99CB0';
        document.getElementById('surgeries-btn').style.backgroundColor = '#E8C1CE';
        document.getElementById('vaccinations-btn').style.backgroundColor = '#E8C1CE';

    }
    const getSurgeries = async () => {
        document.getElementById('treatments-btn').style.backgroundColor = '#E8C1CE';
        document.getElementById('surgeries-btn').style.backgroundColor = '#D99CB0';
        document.getElementById('vaccinations-btn').style.backgroundColor = '#E8C1CE';
    }
    const buttons = [
        {label: 'New visit', href:'/dashboard/new-visit'},
        {label: 'My pets', href:'/dashboard/my-pets'},
        {label: 'My pet groups', href:'/dashboard/my-pet-groups'},
        {label: 'Visits', href:'/dashboard/visits'},
    ]
    const nav = [
        {id: 'vaccinations-btn', label:'Vaccinations', view:'vaccinations', onClick: getVaccinations},
        {id: 'treatments-btn', label:'Treatments', view:'treatments', onClick: getTreatments},
        {id: 'surgeries-btn', label:'Surgeries', view: 'surgeries', onClick: getSurgeries}
    ]
    const vaccinations = [
        {date: '01-12-2024', vetName:'John', vetSurname:'Doe', petName:'Cookie'},
        {date: '19-04-2024', vetName:'Marie', vetSurname:'Jones', petName:'Cookie'},
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
                    <InnerNav
                        buttons={nav}
                        styleClass="visits-nav health-book-nav"
                        buttonStyleClass="nav-btn"
                    />
                    {view === "vaccinations" && <List
                        items = {vaccination.map((vaccination, index) => (
                            <Visit
                                key={index}
                                id={vaccination.id}
                                date={vaccination.date}
                                vetName={vaccination.medicationName}
                                vetSurname={vaccination.medicationBatch}
                                icon="vaccine"
                                iconClass="vis-icon"
                                type="vaccination"
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
export default DashboardPet;