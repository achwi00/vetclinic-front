import React, {useContext, useState} from "react";
import '../../index.css'
import '../../../src/styles/receptionist-dashboard.css'
import '../../../src/styles/dashboard.css'
import SideMenu from "../../component/SideMenu";
import {UserContext} from "../../UserContext";
import IconDisplayer from "../../component/IconDisplayer";
import Form from "../../component/Form";

function DashboardNewVisitForReception(){
    const {user} = useContext(UserContext);
    const [view, setView] = useState("panel");
    const [response, setResponse] = useState(null);

    const buttons = [
        {label: 'Schedules', href:'/dashboard/schedules'},
        {label: 'New visit', href:'/dashboard/new-visit/reception'},
    ]
    const formFields = [
        { name: 'userEmail', placeholder: 'User email', type: 'email', required: true },
        { name: 'petName', placeholder: 'Pet name', type: 'text', required: true },
        { name: 'date', placeholder: 'Visit date', type: 'date', required: true },
        { name: 'startTime', dataplaceholder: 'Start time', type: 'time',  required: true },
        { name: 'endTime', dataplaceholder: 'End time', type: 'time', required: true },
        { name: 'vetEmail', placeholder: 'Vet email', type: 'text', required: true },
    ]
    const handleFormSubmit = async (formData) => {

        try {
            const response = await fetch("http://localhost:8080/visits/custom-visit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userEmail: formData.userEmail,
                    petName: formData.petName,
                    date: formData.date,
                    startTime: formData.startTime,
                    endTime: formData.endTime,
                    vetEmail: formData.vetEmail
                }),
            });

            if (!response.ok) {
                throw new Error(`Failed to add custom visit: ${response.status}`);
            }
            setResponse("Custom visit added successfully.");

            // Optional: Handle UI updates or notifications here
        } catch (error) {
            console.error("Error adding custom visit:", error);
            setResponse("Failed to add custom visit.");
        }
        finally{
            setView("response")
        }
    }
    return(
        <div className="all-holder">
            <SideMenu buttons={buttons}/>
            <div className="content-holder">
                <div className="centring-main">
                    <h2 className="site-tracker">New visit</h2>
                    {view ==="panel" &&
                        <div className="choice-panel-holder">
                            <div className="choice-panel">
                                <div className="left choice-shrink">

                                </div>
                                <div className="choice right choice-grow">
                                    <IconDisplayer
                                        iconName="checkup"
                                        styleClass="service-icon"
                                    />
                                    <Form
                                        fields={formFields}
                                        onFormSubmit={handleFormSubmit}
                                        styleClass="formsHolder forms-longest"
                                        inputStyle="formInputs credentials"
                                        buttonMsg="book"
                                        buttonClass="formInputs form-btn"
                                    />
                                </div>
                            </div>
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
                </div>
            </div>
        </div>
    );
}
export default DashboardNewVisitForReception;