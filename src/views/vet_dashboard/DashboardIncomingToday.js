import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../index.css';
import '../../../src/styles/dashboard.css';
import '../../../src/styles/vetdashboard.css';
import SideMenu from "../../component/SideMenu";
import { UserContext } from "../../UserContext";
import List from "../../component/List";
import DetailedVisit from "../../component/DetailedVisit";

function DashBoardHome() {
    const { user } = useContext(UserContext);
    const email = user.email;
    const [visits, setVisits] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchVisits = async () => {
            try {
                const response = await fetch(
                    `http://localhost:8080/visits/vet/incoming?email=${email}`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );

                if (!response.ok) {
                    new Error(`HTTP error! status: ${response.status}`);
                }

                const fetchedVisits = await response.json();
                const tmpArr = fetchedVisits.map(visit => ({
                    id: visit.id,
                    date: visit.startTime + ` to`,
                    time: visit.endTime,
                    clientName: visit.client.name,
                    clientSurname: visit.client.surname,
                    clientEmail: visit.client.email,
                    petName: visit.basePet.name,
                }));

                setVisits(tmpArr);
            } catch (error) {
                console.error("Error fetching visits:", error);
            }
        };

        fetchVisits();
    }, [email]);

    const buttons = [
        { label: 'Incoming today', href: '/dashboard/incoming' },
        { label: 'My schedule', href: '/dashboard/my-schedule' },
    ];

    const handleAddDetails = (visit) => {
        navigate("/dashboard/add-vaccination", { state: { visit } });
    };

    return (
        <div className="all-holder">
            <SideMenu buttons={buttons} />
            <div className="content-holder">
                <div className="centring-main">
                    <h2 className="site-tracker">Incoming today</h2>
                    <List
                        items={visits.map((visit, index) => (
                            <DetailedVisit
                                key={index}
                                id={visit.id}
                                date={visit.date}
                                time={visit.time}
                                vetName={visit.clientName}
                                vetSurname={visit.clientSurname}
                                clientEmail={visit.clientEmail}
                                petName={visit.petName}
                                icon="checkup"
                                iconClass="vis-icon"
                                type="completed"
                                onAddDetails={() => handleAddDetails(visit)}
                            />
                        ))}
                        styleClass={"list-holder"}
                        itemsPerPage={4}
                    />
                </div>
            </div>
        </div>
    );
}

export default DashBoardHome;