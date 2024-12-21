import React from "react";
import { useLocation } from "react-router-dom";
import Form from "../component/Form";
import IconDisplayer from "../component/IconDisplayer";
import SideMenu from "./SideMenu";
import List from "./List";
import DetailedVisit from "./DetailedVisit";

function DashboardAddVaccination() {

    const location = useLocation();
    const visit = location.state?.visit; // Retrieve the visit object from route state

    const buttons = [
        { label: 'Incoming today', href: '/dashboard/incoming' },
        { label: 'My schedule', href: '/dashboard/my-schedule' },
        { label: 'New prescription', href: '/dashboard/new-prescription' },
    ];
    const formFieldsVaccination = [
        { name: 'pet', placeholder: 'Pet name', type: 'text', required: true },
        { name: 'medication', placeholder: 'Medication', type: 'text', required: true },
        { name: 'numOfPets', placeholder: 'Pets affected', type: 'number', required: true },
    ];

    const handleFormSubmit = async (formData) => {
        console.log("Submitted Form Data:", formData);
        console.log("Visit Details:", visit);
        // Handle the form submission logic here
    };

    return (

        <div className="all-holder">
            <SideMenu buttons={buttons} />
            <div className="content-holder">
                <div className="centring-main">
                    <h2 className="site-tracker">Add details</h2>
                    <div className="choice-panel-holder">
                        <div className="choice-panel">
                            <div className="choice left choice-grow">
                                <IconDisplayer
                                    iconName="vaccine"
                                    styleClass="service-icon"
                                />
                                <Form
                                    fields={formFieldsVaccination}
                                    onFormSubmit={handleFormSubmit}
                                    styleClass="formsHolder forms-longer"
                                    inputStyle="formInputs credentials"
                                    buttonMsg="add new vaccination"
                                    buttonClass="formInputs form-btn"
                                />
                            </div>
                            <div className="right choice-shrink"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default DashboardAddVaccination;
