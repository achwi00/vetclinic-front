import React, {useContext} from "react";
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import '../../index.css'
import '../../../src/styles/dashboard.css'
import SideMenu from "../../component/SideMenu";
import {UserContext} from "../../UserContext";
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'


function DashBoardHome(){
    const {user} = useContext(UserContext);

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
                    <div className="calendar-holder">
                        <Calendar
                            localizer={localizer}
                            startAccessor="start"
                            endAccessor="end"
                            style={{ height: 500 }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DashBoardHome;