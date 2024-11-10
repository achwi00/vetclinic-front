import React from 'react';
import '../styles/services.css';
import Box from "./Box";

function ServiceBoard(){
    const serviceBoxes = [
        {iconName: 'checkup',title: 'Checkups', descrPart1: 'Lorem ipsum dolor.'},
        {iconName: 'vaccine',title: 'Vaccinations', descrPart1: 'Lorem ipsum dolor.'},
        {iconName: 'surgery',title: 'Surgeries', descrPart1: 'Lorem ipsum dolor.'},
        {iconName: 'medicine',title: 'Prescriptions', descrPart1: 'Lorem ipsum dolor.'},
        {iconName: 'support',title: 'Support for animal groups', descrPart1: 'Lorem ipsum dolor.'},
        {iconName: 'chip',title: 'Chipping', descrPart1: 'Lorem ipsum dolor.'},
    ]
    return(
        <div className="main">
            <div className="centring-content-column">
                <div>
                    <h1>Learn more about our services.</h1>
                    <h2>Lorem ipsum dolor sit amet.</h2>
                </div>
                <div className="services-holder">
                    {serviceBoxes.map((box, index) => (
                        <Box
                            key={index}
                            title={box.title}
                            iconName={box.iconName}
                            iconStyle="service-icon"
                            descrPart1={box.descrPart1}
                            styleClass="box service"
                            titleStyle="service-title"
                            descrStyle="service-description"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
export default ServiceBoard;