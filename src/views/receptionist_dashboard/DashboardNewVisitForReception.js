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
    const [res, setResponse] = useState(null);

    const buttons = [
        {label: 'Schedules', href:'/dashboard/schedules'},
        {label: 'New visit', href:'/dashboard/new-visit/reception'},
    ]
    const formFields = [
        { name: 'email', placeholder: 'User email', type: 'email', required: true },
        { name: 'petName', placeholder: 'Pet name', type: 'text', required: true },
        { name: 'date', placeholder: 'Visit date', type: 'date', required: true },
        { name: 'startTime', dataplaceholder: 'Start time', type: 'time',  required: true },
        { name: 'endTime', dataplaceholder: 'End time', type: 'time', required: true },
    ]
    const handleFormSubmit = async (formData) => {}
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
                                        styleClass="formsHolder forms-longer"
                                        inputStyle="formInputs credentials"
                                        buttonMsg="book"
                                        buttonClass="formInputs form-btn"
                                    />
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}
export default DashboardNewVisitForReception;