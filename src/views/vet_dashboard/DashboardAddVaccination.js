import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import Form from "../../component/Form";
import IconDisplayer from "../../component/IconDisplayer";
import SideMenu from "../../component/SideMenu";
import InnerNav from "../../component/InnerNav";

function DashboardAddVaccination() {

    const location = useLocation();
    const visit = location.state?.visit; // Retrieve the visit object from route state
    const [view, setView] = useState("vaccination");
    const [response, setResponse] = useState(null);
    const buttons = [
        { label: 'Incoming today', href: '/dashboard/incoming' },
        { label: 'My schedule', href: '/dashboard/my-schedule' },
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
    const medicationOptions = [
        { value: 'Amoxicillin', label: 'Amoxicillin' },
        { value: 'Alprazolam', label: 'Alprazolam' },
        { value: 'Benazepril', label: 'Benazepril' },
        { value: 'BVit', label: 'BVit' },
        { value: 'ImoVAX Rabbies', label: 'ImoVAX Rabbies' },
        { value: 'K-9 Advantix', label: 'K-9 Advantix' },
    ];
    const formFieldsVaccination = [
        {
            name: 'medication',
            placeholder: 'Select medication',
            type: 'select',
            options: medicationOptions,
            required: true
        },
        { name: 'numOfPets', placeholder: 'Pets affected', type: 'number', required: true, min:'1' },
    ];

    const formFieldsTreatment = [
        {
            name: 'medication',
            placeholder: 'Select medication',
            type: 'select',
            options: medicationOptions,
            required: true
        },
        { name: 'numOfPets', placeholder: 'Pets affected', type: 'number', required: true, min:'1' },
        { name: 'description', placeholder: 'Description', type: 'textarea', required: true },
        { name: 'startDate', placeholder: 'Start date', type: 'date', required: true },
        { name: 'endDate', placeholder: 'End Date', type: 'date', required: true },
    ];

    const formFieldsSurgery = [
        { name: 'numOfPets', placeholder: 'Pets affected', type: 'number', required: true, min:'1' },
        { name: 'description', placeholder: 'Description', type: 'textarea', required: true },
    ];


    const handleNewVaccinationSubmit = async (formData) => {
        console.log("Submitted Form Data:", formData);
        console.log("Visit Details:", visit);
        // Handle the form submission logic here
        try {
            const response = await fetch("http://localhost:8080/add-vaccination", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    medicationName: formData.medication,
                    visitId: visit.id,
                    numOfPets: formData.numOfPets
                }),
            });

            if (!response.ok) {
                throw new Error(`Failed to add vaccination: ${response.status}`);
            }
            setResponse("Vaccination added successfully.");

            // Optional: Handle UI updates or notifications here
        } catch (error) {
            console.error("Error adding vaccination:", error);
            setResponse("Failed to add vaccination.");
        }
        finally{
            setView("response")
        }

    };

    const handleNewTreatmentSubmit = async (formData) => {
        console.log("Submitted Form Data:", formData);
        console.log("Visit Details:", visit);
        // Handle the form submission logic here

        try {
            const response = await fetch("http://localhost:8080/add-treatment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    medicationName: formData.medication,
                    visitId: visit.id,
                    numOfPets: formData.numOfPets,
                    description: formData.description,
                    startDate: formData.startDate,
                    endDate: formData.endDate
                }),
            });

            if (!response.ok) {
                throw new Error(`Failed to add treatment: ${response.status}`);
            }
            setResponse("Treatment added successfully.");

            // Optional: Handle UI updates or notifications here
        } catch (error) {
            console.error("Error adding treatment:", error);
            setResponse("Failed to add treatment.");
        }
        finally{
            setView("response")
        }
    };

    const handleNewSurgerySubmit = async (formData) => {
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
                                        onFormSubmit={handleNewVaccinationSubmit}
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
                                        onFormSubmit={handleNewTreatmentSubmit}
                                        styleClass="formsHolder forms-longer"
                                        inputStyle="formInputs credentials"
                                        buttonMsg="add new treatment"
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
                                        onFormSubmit={handleNewSurgerySubmit}
                                        styleClass="formsHolder"
                                        inputStyle="formInputs credentials"
                                        buttonMsg="add new surgery"
                                        buttonClass="formInputs form-btn"
                                    />
                                </div>
                            }
                            {view === "response" &&
                                <div className="choice-panel-holder">
                                    <div className="choice-panel choice-response">
                                        <p className="response-p">{response}</p>
                                        {/*<div className="success-paw">*/}
                                        {/*    <img src={"../imgs/paw-right.svg"} alt={"paw"} />*/}
                                        {/*</div>*/}
                                    </div>
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
