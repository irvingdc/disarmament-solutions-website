import React, { Fragment } from "react"
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import "../../main.module.css"
import ServiceSection from "../../components/ServiceSection/ServiceSection";

export default () =>(
    <Fragment>
        <Nav lan="en" alt="/es/mantenimiento-de-registros"/>
            <ServiceSection title="Record-keeping" lan="en">
            The record-keeping module mainly consists of an IT system with an associated database that enables all material to be monitored throughout the disarmament process – from the initial registration until all components are finally destroyed or recycled. Support for registration, seizure, inventory, goods control, transports etc. is provided based on specific needs.
            </ServiceSection>
        <Footer/>
    </Fragment>
)