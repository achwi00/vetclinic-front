import React, {useState} from "react";
import SideMenu from "../../component/SideMenu";
import IconDisplayer from "../../component/IconDisplayer";
import Form from "../../component/Form";

function DashboardNewPet(){
    const [view, setView] = useState("choice");
    const buttons = [
        {label: 'New visit', href:'/dashboard/new-visit'},
        {label: 'My pets', href:'/dashboard/my-pets'},
        {label: 'My pet groups', href:'/dashboard/my-pet-groups'},
        {label: 'Visits', href:'#'},
    ];
    const formFields = [
        { name: 'petName', placeholder: 'Pet name', type: 'text', required: true },
        { name: 'breed', placeholder: 'Breed', type: 'text', required: true },
        {
            name: 'type',
            placeholder: 'Select type',
            type: 'select',
            options: [
                { value: 'DOG', label: 'Dog' },
                { value: 'CAT', label: 'Cat' },
                { value: 'RABBIT', label: 'Rabbit' },
                { value: 'RODENT', label: 'Rodent' },
                { value: 'FARM_ANIMAL', label: 'Farm animal'}
            ],
            required: true
        },
        { name: 'birthDate', placeholder: 'Birth date', type: 'date', required: true },
        {
            name: 'sex',
            placeholder: 'Select sex',
            type: 'select',
            options: [
                { value: 'MALE', label: 'Male' },
                { value: 'FEMALE', label: 'Female' },
                { value: 'UNKNOWN', label: 'Unknown' }
            ],
            required: true
        }
    ];
    const handleFormSubmit = () => {}

    return(
        <div className="all-holder">
            <SideMenu buttons={buttons}/>
            <div className="content-holder">
                <div className="centring-main">
                    <h2 className="site-tracker">Add new pet</h2>
                    {view ==="choice" &&
                        <div className="choice-panel-holder">
                            <div className="choice-panel  choice-panel-shrink">
                                <div className="choice left" onClick={()=>{setView("add-pet")}}>
                                    <h3>Add new pet</h3>
                                    <IconDisplayer
                                        iconName="cat"
                                        styleClass="service-icon"
                                    />
                                    <p>Add a new pet.</p>
                                </div>
                                <div className="choice right" onClick={()=> {setView("add-group")}}>
                                    <h3>Add pet group</h3>
                                    <IconDisplayer
                                        iconName="group"
                                        styleClass="service-icon"
                                    />
                                    <p>Add a new pet group.</p>
                                </div>
                            </div>
                        </div>
                    }
                    {view ==="add-pet" &&
                        <div className="choice-panel-holder">
                            <div className="choice-panel">
                                <div className="choice left choice-grow">
                                    <h3>New pet</h3>
                                    <IconDisplayer
                                        iconName="cat"
                                        styleClass="service-icon"
                                    />
                                    <Form
                                        fields={formFields}
                                        onFormSubmit={handleFormSubmit}
                                        styleClass="formsHolder forms-longer"
                                        inputStyle="formInputs credentials"
                                        buttonMsg="add pet"
                                        buttonClass="formInputs form-btn"
                                    />

                                </div>
                                <div className="right choice-shrink">
                                </div>
                            </div>
                        </div>
                    }
                    {view ==="add-group" &&
                        <div className="choice-panel-holder">
                            <div className="choice-panel">
                                <div className="left choice-shrink">

                                </div>
                                <div className="choice right choice-grow">
                                    <h3>Add new group</h3>
                                    <IconDisplayer
                                        iconName="group"
                                        styleClass="service-icon"
                                    />
                                    <p>Add a new pet group.</p>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}
export default DashboardNewPet;