import React, {useContext, useEffect, useState} from "react";
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import '../../index.css'
import SideMenu from "../../component/SideMenu";
import {UserContext} from "../../UserContext";
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../../../src/styles/dashboard.css'
import '../../../src/styles/schedules-styles.css'

function DashBoardHome(){
    const {user} = useContext(UserContext);
    const email = user.email;
    const [visits, setVisits] = useState([]);
    const [view, setView] = useState(null);

    useEffect(() => {
        const fetchVisits = async () => {
            try {
                const response = await fetch(
                    `http://localhost:8080/visits/vet/all-incoming?email=${email}`,
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
                console.log("fetched", fetchedVisits)
                const tempArr = fetchedVisits.map((visit) => ({
                    id: visit.visitId,
                    title: visit.title,
                    start: new Date(visit.start), // Convert ISO string to Date object
                    end: new Date(visit.end),   // Convert ISO string to Date object
                }));

                setVisits(tempArr);
                setView("calendar");
            } catch (error) {
                console.error("Error fetching visits:", error);
            }
        };

        fetchVisits();

    }, [email]);

    useEffect(() => {
        console.log("Updated Visits:", visits);
    }, [visits]); // Runs whenever visits are updated

    const events = [
        {visitId: 1, date: '2024-12-30',
            start: new Date(2024, 11, 30, 14, 30),
            end: new Date(2024, 11, 30, 15, 0), title: 'Eva Smith'}
    ]
    const buttons = [
        {label: 'Incoming today', href:'/dashboard/incoming'},
        {label: 'My schedule', href:'/dashboard/my-schedule'},
    ]
    const locales = {
        'en-US': enUS,
    }

    const localizer = dateFnsLocalizer({
        format,
        parse,
        startOfWeek,
        getDay,
        locales,
    })

    return(
        <div className="all-holder">
            <SideMenu buttons={buttons}/>
            <div className="content-holder">
                <div className="centring-main">
                    <h2 className="site-tracker">My schedule</h2>
                    {view === "calendar" &&
                        <div className="calendar-holder">
                            <Calendar
                                localizer={localizer}
                                events={visits}
                                startAccessor="start"
                                endAccessor="end"
                                style={{ height: 500 }}
                            />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}
export default DashBoardHome;