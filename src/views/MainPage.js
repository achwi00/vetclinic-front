import React from "react";
import UpperMenu from "../component/UpperMenu";
import MainBoard from "../component/MainBoard";
import ServiceBoard from "../component/ServiceBoard";

function MainPage(){
    return(
        <>
            <UpperMenu/>
            <MainBoard/>
            <ServiceBoard/>
        </>
    );
}
export default MainPage;