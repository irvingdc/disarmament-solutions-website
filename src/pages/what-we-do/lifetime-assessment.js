import React, { Fragment } from "react"
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import "../../main.module.css"
import ServiceSection from "../../components/ServiceSection/ServiceSection";

export default () =>(
    <Fragment>
        <Nav lan="en"/>
            <ServiceSection title="Lifetime assessment">
            The lifetime assessment module includes different solutions to determine the status and condition of the material that is to be disarmed as well as critical input values needed to design safe work processes. For material containing explosives, the remaining lifetime is also evaluated to determine how long it can be stored before becoming unstable. 
            </ServiceSection>
        <Footer/>
    </Fragment>
)