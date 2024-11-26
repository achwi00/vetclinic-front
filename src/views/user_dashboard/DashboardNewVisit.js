import React, {useContext, useState} from "react";
import SideMenu from "../../component/SideMenu";
import List from "../../component/List";
import IconDisplayer from "../../component/IconDisplayer";
import Form from "../../component/Form";
import {UserContext} from "../../UserContext";
import Visit from "../../component/Visit";
import Box from "../../component/Box";

function DashboardNewVisit(){
    // State to track view and form data
    const {user} = useContext(UserContext);
    const [view, setView] = useState("form");
    const [formData, setFormData] = useState(null);
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
    const handleFormSubmit = (data) => {
        savedPet = data.petname;
        console.log(savedPet);
        setFormData(data); // Save the form data
        setView("visits"); // Switch to the visits view
    };
    const visits = [
        {date: "2024-12-12", time: "14:00", vetName:"Marie", vetSurname:"Smith" , petName: "Cookie", classStyle: "", icon: "checkup", iconClass: ""}
    ]
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
                    {/*{view === "visits" && <List items={visits}/>}*/}
                    {/*{view === "visits" && <Visit*/}
                    {/*    date="2024-12-12"*/}
                    {/*    time="14:30"*/}
                    {/*    vetName="Mary"*/}
                    {/*    vetSurname="Smith"*/}
                    {/*    icon="checkup"*/}
                    {/*    iconClass="vis-icon"*/}
                    {/*    */}
                    {/*/>}*/}
                    {view === "visits" && <List
                        items = {visits.map((visit, index) => (
                            <Visit
                                key={index}
                                date={visit.date}
                                time={visit.time}
                                vetName={visit.vetName}
                                vetSurname={visit.vetSurname}
                                icon="checkup"
                                iconClass="vis-icon"
                            />
                        ))}

                    />}
                </div>
            </div>
        </div>
    );
}
export default DashboardNewVisit;