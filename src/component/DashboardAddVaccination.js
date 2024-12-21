import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import Form from "../component/Form";
import IconDisplayer from "../component/IconDisplayer";
import SideMenu from "./SideMenu";
import List from "./List";
import DetailedVisit from "./DetailedVisit";
import InnerNav from "./InnerNav";

function DashboardAddVaccination() {

    const location = useLocation();
    const visit = location.state?.visit; // Retrieve the visit object from route state
    const [view, setView] = useState("vaccination");
    const buttons = [
        { label: 'Incoming today', href: '/dashboard/incoming' },
        { label: 'My schedule', href: '/dashboard/my-schedule' },
        { label: 'New prescription', href: '/dashboard/new-prescription' },
    ];
    const newVaccination = async () => {
        document.getElementById('treatment-btn').style.backgroundColor = '#E8C1CE';
        document.getElementById('surgery-btn').style.backgroundColor = '#E8C1CE';
        document.getElementById('vaccination-btn').style.backgroundColor = '#D99CB0';
        setView("vaccination");
    }
    const newTreatment = async () => {
        document.getElementById('treatment-btn').style.backgroundColor = '#D99CB0';
        document.getElementById('surgery-btn').style.backgroundColor = '#E8C1CE';
        document.getElementById('vaccination-btn').style.backgroundColor = '#E8C1CE';
        setView("treatment");
    }
    const newSurgery = async () => {
        document.getElementById('treatment-btn').style.backgroundColor = '#E8C1CE';
        document.getElementById('surgery-btn').style.backgroundColor = '#D99CB0';
        document.getElementById('vaccination-btn').style.backgroundColor = '#E8C1CE';
        setView("surgery");
    }

    const nav = [
        {id: 'vaccination-btn', label:'Add vaccination', view:'vaccination', onClick: newVaccination},
        {id: 'treatment-btn', label:'Add treatment', view:'treatment', onClick: newTreatment},
        {id: 'surgery-btn', label:'Add surgery', view: 'surgery', onClick: newSurgery}
    ]
    const formFieldsVaccination = [
        { name: 'medication', placeholder: 'Medication', type: 'text', required: true },
        { name: 'numOfPets', placeholder: 'Pets affected', type: 'number', required: true },
    ];

    const formFieldsTreatment = [
        { name: 'medication', placeholder: 'Medication', type: 'text', required: true },
        { name: 'numOfPets', placeholder: 'Pets affected', type: 'number', required: true },
        { name: 'description', placeholder: 'Description', type: 'textarea', required: true },
        { name: 'startDate', placeholder: 'Start date', type: 'date', required: true },
        { name: 'endDate', placeholder: 'End Date', type: 'date', required: true },
    ];

    const formFieldsSurgery = [
        { name: 'numOfPets', placeholder: 'Pets affected', type: 'number', required: true },
        { name: 'description', placeholder: 'Description', type: 'textarea', required: true },
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
                    <h2 className="site-tracker">Add details for {visit.petName}'s visit</h2>
                    <InnerNav
                        buttons={nav}
                        styleClass="visits-nav health-book-nav"
                        buttonStyleClass="nav-btn"
                    />
                    <div className="choice-panel-holder">
                        <div className="choice-panel">
                            {view === "vaccination" &&
                                <div className="choice left choice-grow">
                                    <IconDisplayer
                                        iconName="vaccine"
                                        styleClass="service-icon"
                                    />
                                    <Form
                                        fields={formFieldsVaccination}
                                        onFormSubmit={handleFormSubmit}
                                        styleClass="formsHolder"
                                        inputStyle="formInputs credentials"
                                        buttonMsg="add new vaccination"
                                        buttonClass="formInputs form-btn"
                                    />
                                </div>
                            }
                            {view === "treatment" &&
                                <div className="choice left choice-grow">
                                    <IconDisplayer
                                        iconName="medicine"
                                        styleClass="service-icon"
                                    />
                                    <Form
                                        fields={formFieldsTreatment}
                                        onFormSubmit={handleFormSubmit}
                                        styleClass="formsHolder forms-longer"
                                        inputStyle="formInputs credentials"
                                        buttonMsg="add new vaccination"
                                        buttonClass="formInputs form-btn"
                                    />
                                </div>
                            }
                            {view === "surgery" &&
                                <div className="choice left choice-grow">
                                    <IconDisplayer
                                        iconName="surgery"
                                        styleClass="service-icon"
                                    />
                                    <Form
                                        fields={formFieldsSurgery}
                                        onFormSubmit={handleFormSubmit}
                                        styleClass="formsHolder"
                                        inputStyle="formInputs credentials"
                                        buttonMsg="add new vaccination"
                                        buttonClass="formInputs form-btn"
                                    />
                                </div>
                            }
                            <div className="right choice-shrink"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default DashboardAddVaccination;
