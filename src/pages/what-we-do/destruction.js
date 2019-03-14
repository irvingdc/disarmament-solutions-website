import React, { Fragment } from "react"
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import "../../main.module.css"
import ServiceSection from "../../components/ServiceSection/ServiceSection";

export default () =>(
    <Fragment>
        <Nav lan="en" alt="/es/que-hacemos/destruccion"/>
            <ServiceSection title="Destruction" lan="en">
                The destruction module includes different solutions for the destruction of weapons and ammunition, stationary and mobile. All the solutions are designed to minimise negative environmental impact and unacceptable risks for the personnel involved. 
            </ServiceSection>
        <Footer/>
    </Fragment>
)