import React from "react";
import { useLocation } from "react-router-dom";

function DashboardPetDetailsForVet() {
    const location = useLocation();
    const { petName, clientEmail } = location.state || {};

    return (
        <div>
            <h1>Pet Details</h1>
            <p>Pet's name: {petName}</p>
            <p>Client email: {clientEmail}</p>
        </div>
    );
}

export default DashboardPetDetailsForVet;