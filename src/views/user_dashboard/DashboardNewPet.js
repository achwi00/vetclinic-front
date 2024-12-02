import React, {useState} from "react";
import SideMenu from "../../component/SideMenu";
import IconDisplayer from "../../component/IconDisplayer";

function DashboardNewPet(){
    const [view, setView] = useState("choice");
    const buttons = [
        {label: 'New visit', href:'/dashboard/new-visit'},
        {label: 'My pets', href:'/dashboard/my-pets'},
        {label: 'My pet groups', href:'/dashboard/my-pet-groups'},
        {label: 'Visits', href:'#'},
    ]
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
                                    <h3>Add new pet</h3>
                                    <IconDisplayer
                                        iconName="cat"
                                        styleClass="service-icon"
                                    />
                                    <p>Add a new pet.</p>
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