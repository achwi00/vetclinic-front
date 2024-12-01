import React from "react";
import SideMenu from "../../component/SideMenu";
import Box from "../../component/Box";
import List from "../../component/List";

function DashboardMyPetGroups(){
    const buttons = [
        {label: 'New visit', href:'/dashboard/new-visit'},
        {label: 'My pets', href:'/dashboard/my-pets'},
        {label: 'My pet groups', href:'/dashboard/my-pet-groups'},
        {label: 'Visits', href:'#'},
    ]
    const boxes = [
        {iconName: 'plus', title: 'Add new pet'},
        {iconName: 'group', title: 'C1', descrPart1: 'Cows', descrPart2: 'Description'},
    ]
    return(
        <div className="all-holder">
            <SideMenu buttons={buttons}/>
            <div className="content-holder">
                <div className="centring-main">
                    <h2 className="site-tracker">My pet groups</h2>
                    <List
                        items = {boxes.map((box, index) => (
                            <Box
                                key={index}
                                title={box.title}
                                iconName={box.iconName}
                                iconStyle="service-icon"
                                descrPart1={box.descrPart1}
                                descrPart2={box.descrPart2}
                                styleClass="box pet"
                                titleStyle="pet-name"
                                descrStyle="pet-description"
                                navigateTo="/dashboard/pet"
                            />
                        ))}
                        styleClass="pet-holder"
                        itemsPerPage={6}
                    />
                </div>
            </div>
        </div>
    );
}
export default DashboardMyPetGroups;