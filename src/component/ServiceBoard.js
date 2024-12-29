import React from 'react';
import '../styles/services.css';
import Box from "./Box";

function ServiceBoard(){
    const serviceBoxes = [
        {iconName: 'checkup',title: 'Checkups', descrPart1: 'Regular health checkups ensure your pet stays happy and healthy.'},
        {iconName: 'vaccine',title: 'Vaccinations', descrPart1: ' Protect your pet early! We follow recommended schedules to keep your furry friend protected.'},
        {iconName: 'surgery',title: 'Surgeries', descrPart1: 'Your pets are safe in the hands of our skilled pet surgeons.'},
        {iconName: 'medicine',title: 'Prescriptions', descrPart1: 'Full range of medications and treatments, with expert guidance for proper use and care.'},
        {iconName: 'support',title: 'Support for animal groups', descrPart1: 'Full offer available for private clients and animal husbandry!'},
        {iconName: 'chip',title: 'Chipping', descrPart1: ' A simple procedure gives you peace of mind and a lifetime of security.'},
    ]
    return(
        <div className="main">
            <div className="centring-content-column">
                <div>
                    <h1>Learn more about our services.</h1>
                    <h2>We have everything your peace of mind and your pet's health needs.</h2>
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
                <div className="gap-filler"></div>
            </div>
        </div>
    );
}
export default ServiceBoard;