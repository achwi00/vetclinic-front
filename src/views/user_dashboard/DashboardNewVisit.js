import React, {useContext, useState} from "react";
import SideMenu from "../../component/SideMenu";
import List from "../../component/List";
import IconDisplayer from "../../component/IconDisplayer";
import Form from "../../component/Form";
import {UserContext} from "../../UserContext";
import Visit from "../../component/Visit";

function DashboardNewVisit(){
    // State to track view and form data
    const {user} = useContext(UserContext);
    const [view, setView] = useState("form");
    const [formData, setFormData] = useState(null);
    const [visits, setVisits] = useState();
    let savedPet;

    const buttons = [
        {label: 'New visit', href:'/dashboard/new-visit'},
        {label: 'My pets', href:'/dashboard/my-pets'},
        {label: 'My pet groups', href:'/dashboard/my-pet-groups'},
        {label: 'Visits', href:'#'},
    ]
    const formFields = [
        { name: 'petname', placeholder: 'Pet name', type: 'text', required: true },
        { name: 'date', type: 'date', required: true },
        { name: 'datedue', type: 'date', required: true}
    ];
    const handleFormSubmit = async (data) => {
        savedPet = data.petname;
        console.log(savedPet);
        setFormData(data); // Save the form data

        try{
            const response = await fetch(
                `http://localhost:8080/visits/in-between?startDate=${data.date}&endDate=${data.datedue}`,
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
                        time: visit.endTime,
                        vetName: visit.vet.name,
                        vetSurname: visit.vet.surname,
                        petName: savedPet,
                    }
                    tmpArr.push(tmpObj);
                }
            )
            console.log(tmpArr);
            //set visits and change view to visits from form
            setVisits(tmpArr);
            setView("visits");
        }catch(error){
            console.log(error)
            console.log("Error fetching visits.")
        }

    };

    return(
        <div className="all-holder">
            <SideMenu buttons={buttons}/>
            <div className="content-holder">
                <div className="centring-main">
                    <h2 className="site-tracker">New visit</h2>
                    {view === "form" &&
                        <div className="choice-panel-holder">
                            <div className="choice-panel">
                                <div className="choice left">
                                    <h3>For Your pet</h3>
                                    <IconDisplayer
                                        iconName="cat"
                                        styleClass="service-icon"
                                    />
                                    <Form
                                        fields={formFields}
                                        onFormSubmit={handleFormSubmit}
                                        styleClass="formsHolder"
                                        inputStyle="formInputs credentials"
                                        buttonMsg="confirm"
                                        buttonClass="formInputs form-btn"
                                    />

                                </div>
                                <div className="choice right">
                                    <h3>For Your group</h3>
                                    <IconDisplayer
                                        iconName="group"
                                        styleClass="service-icon"
                                    />
                                    <p>Book a visit for Your pet group.</p>
                                </div>
                            </div>
                        </div>
                    }
                    {view === "visits" && <List
                        items = {visits.map((visit, index) => (
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
                                type="free"
                            />
                        ))}
                        styleClass={"list-holder"}
                    />}
                </div>
            </div>
        </div>
    );
}
export default DashboardNewVisit;