import React, { Fragment } from "react"
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import "../../main.module.css"
import ServiceSection from "../../components/ServiceSection/ServiceSection";

export default () =>(
    <Fragment>
        <Nav lan="en" alt="/es/que-hacemos/gestion"/>
            <ServiceSection title="Management" lan="en">
            The management module is the main module of a disarmament concept and includes all required management for the design, development and implementation of the concept. The module starts with an initial needs analysis and is then an integrated part of the project as each phase is conducted together with the implementing partner. Throughout the process, safety, security and environmental risks are taken into account.
            </ServiceSection>
        <Footer/>
    </Fragment>
)