import React from 'react';
import '../services.css';
import Box from "./Box";

function ServiceBoard(){
    const serviceBoxes = [
        {title: 'Checkups', descrPart1: 'Lorem ipsum dolor.'},
        {title: 'Vaccinations', descrPart1: 'Lorem ipsum dolor.'},
        {title: 'Surgeries', descrPart1: 'Lorem ipsum dolor.'},
        {title: 'Prescriptions', descrPart1: 'Lorem ipsum dolor.'},
        {title: 'Support for animal groups', descrPart1: 'Lorem ipsum dolor.'},
        {title: 'Chipping', descrPart1: 'Lorem ipsum dolor.'},
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