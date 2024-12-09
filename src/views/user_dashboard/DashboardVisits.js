import React, {useContext, useState} from "react";
import SideMenu from "../../component/SideMenu";
import InnerNav from "../../component/InnerNav";
import {UserContext} from "../../UserContext";
import Visit from "../../component/Visit";
import List from "../../component/List";

function DashboardVisits(){
    const {user} = useContext(UserContext);
    const email = user.email;
    const [view, setView] = useState("previous");
    const [prevVisits, setPrevVisits] = useState([]);
    const [plannedVisits, setPlannedVisits] = useState([]);
    const handlePrevious = async () => {
        console.log("Previous button clicked");

        document.getElementById('prev-vis-btn').style.backgroundColor = '#D99CB0';
        document.getElementById('planned-vis-btn').style.backgroundColor = '#E8C1CE';

        try{
            const response = await fetch(
                `http://localhost:8080/visits/completed?email=${email}`,
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

            const fetchedVisits = await response.json();
            console.log(fetchedVisits); // Log the visits data

            let tmpArr = [];
            fetchedVisits.forEach(
                visit=>{
                    console.log(visit);
                    const tmpObj = {
                        id: visit.id,
                        date: visit.date,
                        time: visit.startTime,
                        vetName: visit.vet.name,
                        vetSurname: visit.vet.surname,
                        petName: visit.basePet.name,
                    }
                    tmpArr.push(tmpObj);
                }
            )
            console.log(tmpArr);
            //set visits and change view to visits from form
            setPrevVisits(tmpArr);
            setView("previous");
        }catch(error){
            console.log(error)
            console.log("Error fetching visits.")
        }
    };

    const handlePlanned = async () => {
        console.log("Planned button clicked");

        document.getElementById('prev-vis-btn').style.backgroundColor = '#E8C1CE';
        document.getElementById('planned-vis-btn').style.backgroundColor = '#D99CB0';

        try{
            const response = await fetch(
                `http://localhost:8080/visits/upcoming?email=${email}`,
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

            const fetchedVisits = await response.json();
            console.log(fetchedVisits); // Log the visits data

            let tmpArr = [];
            fetchedVisits.forEach(
                visit=>{
                    console.log(visit);
                    const tmpObj = {
                        id: visit.id,
                        date: visit.date,
                        time: visit.startTime,
                        vetName: visit.vet.name,
                        vetSurname: visit.vet.surname,
                        petName: visit.basePet.name,
                    }
                    tmpArr.push(tmpObj);
                }
            )
            console.log(tmpArr);
            //set visits and change view to visits from form
            setPlannedVisits(tmpArr);
            setView("planned");
        }catch(error){
            console.log(error)
            console.log("Error fetching visits.")
        }
    };
    const buttons = [
        {label: 'New visit', href:'/dashboard/new-visit'},
        {label: 'My pets', href:'/dashboard/my-pets'},
        {label: 'My pet groups', href:'/dashboard/my-pet-groups'},
        {label: 'Visits', href:'/dashboard/visits'},
    ]
    const nav = [
        {id:'prev-vis-btn', label:'Previous', view:'previous', onClick: handlePrevious},
        {id:'planned-vis-btn',label:'Planned', view:'planned', onClick: handlePlanned}
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
                    {view === "previous" && <List
                        items = {prevVisits.map((visit, index) => (
                            <Visit
                                key={index}
                                id={visit.id}
                                date={visit.date}
                                time={visit.time}
                                vetName={visit.vetName}
                                vetSurname={visit.vetSurname}
                                petName={visit.petName}
                                icon="checkup"
                                iconClass="vis-icon"
                                type="completed"
                            />
                        ))}
                        styleClass={"list-holder"}
                    />}
                    {view === "planned" && <List
                        items = {plannedVisits.map((visit, index) => (
                            <Visit
                                key={index}
                                id={visit.id}
                                date={visit.date}
                                time={visit.time}
                                vetName={visit.vetName}
                                vetSurname={visit.vetSurname}
                                petName={visit.petName}
                                icon="checkup"
                                iconClass="vis-icon"
                                type="booked"
                            />
                        ))}
                        styleClass={"list-holder"}
                    />}
                </div>
            </div>
        </div>
    );
}
export default DashboardVisits;