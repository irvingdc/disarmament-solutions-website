import React, { Fragment } from "react"
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import "../../main.module.css"
import ServiceSection from "../../components/ServiceSection/ServiceSection";

export default () =>(
    <Fragment>
        <Nav lan="en" alt="/es/proteccion"/>
            <ServiceSection title="Safety protection" lan="en">
            The safety protection module includes products and services required to counteract accidents, handle the consequences of possible accidents and ensure a safe working environment for personnel. The total solution for safety protection is designed on the basis of the defined risk profile regarding safety risks.
            </ServiceSection>
        <Footer/>
    </Fragment>
)