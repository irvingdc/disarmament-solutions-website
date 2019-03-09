import React, { Fragment } from "react"
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import "../../main.module.css"
import ServiceSection from "../../components/ServiceSection/ServiceSection";

export default () =>(
    <Fragment>
        <Nav lan="en"/>
            <ServiceSection title="Transport">
            The transport module includes transport solutions based on the total risk profile (safety, security and environmental risks) associated with the material that is to be transported. Furthermore, the transport solutions are adapted to the types and volumes of material to be transported.
            </ServiceSection>
        <Footer/>
    </Fragment>
)