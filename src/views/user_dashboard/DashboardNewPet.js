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
                            <div className="choice-panel  choice-shrink">
                                <div className="choice left" onClick={()=>{setView("pet")}}>
                                    <h3>Add new pet</h3>
                                    <IconDisplayer
                                        iconName="cat"
                                        styleClass="service-icon"
                                    />
                                    <p>Add a new pet.</p>
                                </div>
                                <div className="choice right">
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
                    {view ==="add-pet"}
                    {view ==="add-group"}
                </div>
            </div>
        </div>
    );
}
export default DashboardNewPet;