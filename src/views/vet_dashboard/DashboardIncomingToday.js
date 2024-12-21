import React, {useContext, useState} from "react";
import '../../index.css'
import '../../../src/styles/dashboard.css'
import '../../../src/styles/vetdashboard.css'
import SideMenu from "../../component/SideMenu";
import {UserContext} from "../../UserContext";
import List from "../../component/List";
import Visit from "../../component/Visit";
import DetailedVisit from "../../component/DetailedVisit";
import IconDisplayer from "../../component/IconDisplayer";
import Form from "../../component/Form";

function DashBoardHome(){
    const {user} = useContext(UserContext);
    const [view, setView] = useState("list");
    const [selectedVisit, setSelectedVisit] = useState(null);
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
    const formFieldsVaccination = [
        { name: 'pet', placeholder: 'Pet name', type: 'text', required: true},
        { name: 'medication', placeholder: 'Medication', type: 'text', required: true },
        { name: 'numOfPets', placeholder: 'Pets affected', type: 'number', required: true }
    ]
    const handleFormSubmit = async (formData) => {

    }

    // Function to handle view change and store selected visit details
    const handleAddDetails = (visit) => {
        setSelectedVisit(visit);
        setView("add-vaccination");
    };
    return(
        <div className="all-holder">
            <SideMenu buttons={buttons}/>
            <div className="content-holder">
                <div className="centring-main">
                    <h2 className="site-tracker">Incoming today</h2>
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
                                onAddDetails={() => handleAddDetails(visit)}
                            />
                        ))}
                        styleClass={"list-holder"}
                        itemsPerPage={4}
                    />}
                    {view === "add-vaccination" &&
                        <div className="choice-panel-holder">
                            <div className="choice-panel">
                                <div className="choice left choice-grow">
                                    <IconDisplayer
                                        iconName="vaccine"
                                        styleClass="service-icon"
                                    />
                                    <Form
                                        fields={formFieldsVaccination}
                                        onFormSubmit={handleFormSubmit()}
                                        styleClass="formsHolder forms-longer"
                                        inputStyle="formInputs credentials"
                                        buttonMsg="add new vaccination"
                                        buttonClass="formInputs form-btn"
                                    />

                                </div>
                                <div className="right choice-shrink">
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}
export default DashBoardHome;