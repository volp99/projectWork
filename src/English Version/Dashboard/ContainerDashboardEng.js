import React from "react";
import NavbarDashboard from "./NavbarDashboard";
import Info from "./Info";
import InfoGruppi from "./InfoGruppi";

const ContainerDashboardEng=()=>{
    return(
        <>
        <NavbarDashboard/>
            <Info/>
            <InfoGruppi/>
        </>
    )
}
export default ContainerDashboardEng;