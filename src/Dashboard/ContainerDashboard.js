import React from "react";
import NavbarDashboard from "./NavbarDashboard";
import Info from "./Info";
import InfoGruppi from "./InfoGruppi";

const ContainerDashboard=()=>{
    return(
        <>
        <NavbarDashboard/>
            <Info/>
            <InfoGruppi/>
        </>
    )
}
export default ContainerDashboard;